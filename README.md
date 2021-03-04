# egg-wechat-mp

@axolo/node-wechat-mp  plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-wechat-mp --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wechatMp = {
  enable: true,
  package: '@axolo/egg-wechat-mp',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.wechatMp = {
  client: {
    appId: 'APP_ID',
    appSecret: 'APP_SECRET',
  },
};
```

see <https://github.com/axolo/node-wechat> for more help.
see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
'use strict';

const Controller = require('egg').Controller;

class WechatMpController extends Controller {
  async create() {
    const { app, ctx } = this;
    ctx.validate({ jsCode: 'string' });
    const { jsCode } = ctx.request.body;
    const wechatMp = app.wechatMp;
    const session = await wechatMp.code2session({ jsCode });
    ctx.body = session;
  }
}

module.exports = WechatMpController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-wechat-mp/issues).

## License

[MIT](LICENSE)
