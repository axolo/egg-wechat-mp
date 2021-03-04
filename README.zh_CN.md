# egg-wechat-mp

@axolo/node-wechat-mp Egg.js 插件。

## 安装

```bash
npm i @axolo/egg-wechat-mp --save
```

## 开启插件

```js
// config/plugin.js
exports.wechatMp = {
  enable: true,
  package: '@axolo/egg-wechat-mp',
};
```


## 详细配置

```js
// {app_root}/config/config.default.js
exports.wechatMp = {
  client: {
    appId: 'APP_ID',
    appSecret: 'APP_SECRET',
  },
};
```

请到 <https://github.com/axolo/node-wechat-mp> 获取更多配置说明。
请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 例子

```js
'use strict';

const Controller = require('egg').Controller;

class WechatController extends Controller {
  async create() {
    const { app, ctx } = this;
    ctx.validate({ jsCode: 'string' });
    const { jsCode } = ctx.request.body;
    const wechatMp = app.wechatMp;
    const session = await wechatMp.code2session({ jsCode });
    ctx.body = session;
  }
}

module.exports = WechatController;
```

## 提问交流

请到 <https://github.com/axolo/egg-wechat-mp/issues> 异步交流。

## License

[MIT](LICENSE)
