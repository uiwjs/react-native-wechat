
/**
 * 向微信注册应用
 * @param appid 通过微信开放平台，[获取appid](https://open.weixin.qq.com/)
 * @param universalLink Universal Link(通用链接)是苹果在 iOS9 推出的，一种能够方便的通过传统 HTTPS 链接来启动 APP 的功能，可以使用相同的网址打开网址和 APP。
 */
export function registerApp(appid: string, universalLink: string): void;