import postKey from './postKey';

const request = (url, params) => {};
export function getRequestList<T extends string, S extends string>(list: T[], url: S): Record<T, `${S}${T}`> {
	return list.reduce((curr, item) => {
		curr[item] = `${url}${item}`;
		return curr;
	}, {} as Record<T, `${S}${T}`>);
}

// api item 数据结构
interface apiItem {
	url: string;
	method?: string;
	headers?: any;
	defaultData?: any;
	formatResult?: (arg: unknown) => any;
}
// 将config结构的数据 输出为api结构
type FormatApi<T> = {
	[K in keyof T]: T[K] extends string
		? requestApi
		: T[K] extends apiItem
		? requestApi
		: T[K] extends object
		? FormatApi<T[K]>
		: never;
};

/**
 * @name 数据请求调用方法
 * @params data 要发送的数据
 * @params headers 要重置的header
 */
export type requestApi = (data?: object, headers?: object) => Promise<any>;

const requestApi = (arg: string | apiItem, key: string): requestApi => {
	let itemConfig = arg as apiItem;
	if (typeof arg === 'string') {
		itemConfig = { url: arg };
	}
	const { url, defaultData, ...otherConfig } = itemConfig;
	return async (params = {}, headers = {}) => {
		otherConfig.headers = { ...otherConfig.headers, ...headers };

		let data = {
			...defaultData,
			...(params || {}),
		};
		for (const key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key)) {
				if ([undefined, ''].includes(data[key])) {
					delete data[key];
				}
			}
		}
		if (params instanceof FormData) {
			data = params;
		}
		const method = otherConfig.method || (postKey.includes(key) ? 'POST' : 'GET');
		return request(url, { data, ...otherConfig, method });
	};
};

const formatApi = <T>(config: T): FormatApi<T> => {
	const api: any = {};
	for (const key in config) {
		if (Reflect.has(config as object, key)) {
			const value = config[key];
			if (typeof value === 'string') {
				api[key] = requestApi(value, key);
			} else if (value && typeof value === 'object' && 'url' in value && typeof value.url === 'string') {
				api[key] = requestApi(value as apiItem, key);
			} else {
				api[key] = formatApi(value);
			}
		}
	}
	return api;
};

export default formatApi;
