import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'hash',
  },
  request: {
    // 可选的，全局设置 request 是否返回 response 对象，默认为 false
    withFullResponse: false,
    baseURL: '',
    headers: {},
    // ...RequestConfig 其他参数
    // 拦截器
    interceptors: {
      request: {
        onConfig: async (config) => {
          return config;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);
