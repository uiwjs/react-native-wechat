import { NativeModules, Platform } from 'react-native';

export default class Wechat {
  /**
   * 向微信注册应用
   * @param appid 通过微信开放平台，[获取appid](https://open.weixin.qq.com/)
   * @param universalLink 参数在 iOS 中有效，Universal Link(通用链接)是苹果在 iOS9 推出的，一种能够方便的通过传统 HTTPS 链接来启动 APP 的功能，可以使用相同的网址打开网址和 APP。
   */
  static registerApp(appid, universalLink = '') {
    if (Platform.OS === 'ios') {
      return NativeModules.RNWechat.registerApp(appid, universalLink);
    }
    if (Platform.OS === 'android') {
      return NativeModules.RNWechat.registerApp(appid);
    }
  }
  /**
   * 检查微信是否已被用户安装
   */
  static isWXAppInstalled() {
    return NativeModules.RNWechat.isWXAppInstalled();
  }
  /**
   * 判断当前微信的版本是否支持 OpenApi，支持返回 true，不支持返回 false
   */
  static isWXAppSupportApi() {
    return NativeModules.RNWechat.isWXAppSupportApi();
  }
  /**
   * 打开微信，成功返回 true，不支持返回 失败返回 false
   */
  static openWXApp() {
    return NativeModules.RNWechat.openWXApp();
  }
  /**
   * 获取当前微信SDK的版本号
   */
  static getApiVersion() {
    return NativeModules.RNWechat.getApiVersion();
  }
}
