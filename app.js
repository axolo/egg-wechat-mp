'use strict';

const NodeWechatMp = require('@axolo/node-wechat-mp');

const createWechatMp = config => {
  const WechatMp = config.WechatMp || NodeWechatMp;
  const wechatMp = new WechatMp(config);
  return wechatMp;
};

module.exports = app => {
  app.addSingleton('wechatMp', createWechatMp);
};
