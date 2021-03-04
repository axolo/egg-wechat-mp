'use strict';

const WechatMp = require('@axolo/node-wechat-mp');

/**
 * **egg-wechat default config**
 *
 * @member Config#wechat
 * @property {Object} WechatMp - @axolo/node-wechat-mp
 * @property {String} appId - appId of Wechat Application
 * @property {String} appSecret - appSecret of Wechat Application
 */
exports.wechat = {
  default: {
    WechatMp,
  },
  // client: {
  //   appId: 'APP_ID',
  //   appSecret: 'APP_SECRET',
  // },
};
