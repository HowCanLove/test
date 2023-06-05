## Antd Design & icejs scaffold

## 使用

```bash
# 安装依赖
$ yarn

# 启动服务
$ sudo npm start  # visit http://localhost:3333

# 可能遇到的问题
# npm start 时提示 permission denied。
$ sudo chmod -R 777 .

```
## sls的使用
``` typescript
// 在 build.json 中 api-context 插件，可以在后面配置 { "host": "aa", "project": "b", "logstore": "c" } sls日志
// 如果配置了sls，使用的时候，可以从ice中引入 slsLog
import { slsLog } from 'ice';
slsLog.error({ msg: "这是一条错误日志" });
slsLog.warn({ msg: "这是一条警告日志" });
slsLog.log({ msg: "这是一条默认日志" });
slsLog.info({ msg: "这是一条默认日志" });

// init可以异步执行
slsLog.init({defaultData: {username: "k"}});

```

## 接口请求的使用
``` typescript
// 在 src/api/index.ts 中配置请求
// api的配置 demo
// {testA: "/test"}
// {testB: {url: "/test", method: "post"}}
// {testC: {a: "/test/a", b: "/test/b"}}
//
// 完整参数demo
// {testD: {url: "/test/e", method: "post", defaultData: {type: 1}, header: {name: "zxhy"}, formatResult: (res) => res }}

import { api } from 'ice';

// 使用方式
api.testA();
api.testB();
api.testC.a();
api.testC.b();
api.testD();
```

[More docs](https://ice.work/docs/guide/about).

## 目录

```md
├── build/                         # 构建产物
├── mock/                          # 本地模拟数据
│   ├── index.[j,t]s
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
│   ├── api/                       # 
│   │   └── index.ts               # 接口请求配置
│   ├── components/                # 自定义业务组件
│   │   └── Guide/
│   │       ├── index.[j,t]sx
│   │       ├── index.module.scss
│   ├── layouts/                   # 布局组件
│   │   └── BasicLayout/
│   │       ├── index.[j,t]sx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── Home/                  # home 页面，约定路由转成小写
│   │       ├── components/        # 页面级自定义业务组件
│   │       ├── models.[j,t]sx     # 页面级数据状态
│   │       ├── index.[j,t]sx      # 页面入口
│   │       └── index.module.scss  # 页面样式文件
│   ├── configs/                   # [可选] 配置文件
│   │   └── menu.[j,t]s            # [可选] 菜单配置
│   ├── models/                    # [可选] 应用级数据状态
│   │   └── user.[j,t]s
│   ├── utils/                     # [可选] 工具库
│   ├── global.scss                # 全局样式
│   ├── routes.[j,t]s              # 路由配置
│   └── app.[j,t]s[x]              # 应用入口脚本
├── build.json                     # 工程配置
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .gitignore
└── [j,t]sconfig.json
```
