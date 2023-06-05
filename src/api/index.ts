import formatApi from './formatApi';

const config = {
	/** demo */
	test: {
		url: '/test',
		method: 'post',
		headers: {},
		defaultData: {},
		formatResult: (result: unknown) => result,
	},
	login: '/login-api',
};

export default formatApi(config);
