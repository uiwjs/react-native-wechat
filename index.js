import { NativeModules } from 'react-native';

// const { RNWechat } = NativeModules;

export default class Wechat {
  /**
   * 向微信注册应用
   * @param appid 通过微信开放平台，[获取appid](https://open.weixin.qq.com/)
   * @param universalLink Universal Link(通用链接)是苹果在 iOS9 推出的，一种能够方便的通过传统 HTTPS 链接来启动 APP 的功能，可以使用相同的网址打开网址和 APP。
   */
  static registerApp(appid, universalLink) {
    return NativeModules.RNWechat.registerApp(appid, universalLink);
  }
  /**
   * 检查微信是否已被用户安装
   */
  static isWXAppInstalled() {
    return NativeModules.RNWechat.isWXAppInstalled();
  }
  /**
   * 判断当前微信的版本是否支持OpenApi，支持返回 true，不支持返回 false
   */
  static isWXAppSupportApi() {
    return NativeModules.RNWechat.isWXAppSupportApi();
  }
}
