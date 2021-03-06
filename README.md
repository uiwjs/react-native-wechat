<br />
<br />
<p align="center">
  <a href="https://uiwjs.github.io/react-native-wechat/">
    <img src="https://user-images.githubusercontent.com/1680273/89100258-46cf6a00-d428-11ea-96dc-8b07a0ee277c.png" height="100" />
  </a>
  <h1 align="center">@uiw/react-native-wechat</h1>
<p>

[![NPM Version](https://img.shields.io/npm/v/@uiw/react-native-wechat.svg)](https://npmjs.org/package/@uiw/react-native-wechat)
![David](https://img.shields.io/david/peer/uiwjs/react-native-alipay)

React Native 包使用微信分享、登录、收藏、支付等功能，支持Android/iOS。完整实例 [Example](https://github.com/uiwjs/react-native-wechat/tree/master/example) | [完整的接口文档](https://uiwjs.github.io/react-native-alipay/)

## 注意事项

<details>
<summary>iOS: 微信授权登录 Universal Link(通用链接)</summary>

> [Universal Link(通用链接)](https://developer.apple.com/documentation/safariservices/supporting_associated_domains)是苹果在 iOS9 推出的，一种能够方便的通过传统 HTTPS 链接来启动 APP 的功能，可以使用相同的网址打开网址和 APP。  
> 看起来就是一条普通的 https 链接，当然是我们在该链接域名根目录配置过的一个链接，也可以在该链接中放置对应的H5页面。当用户的点击该链接，只要手机中安装了支持该链接的 APP 就会直接进入到 APP 中。如果没有安装APP则会跳转到 Safari 浏览器中，展示 H5 页面。对用户来说则是一个无缝跳转的过程。  

创建一个名为 `apple-app-site-association` 的文件，如下：

```json
{
  "applinks": {
    "details": [
      {
        "appID": "968DSZ49MT.com.uiwjs.react.example.wechat",
        "paths": ["/react-native-wechat/*"]
      }
    ]
  }
}
```

**说明：** 字段 appID 中的 `968DSZ49MT` 表示苹果账号的团队 `ID`，`com.uiwjs.react.example.wechat` 表示项目的 `BundleID`。

```
<Application Identifier Prefix>.<Bundle Identifier>
```

上传该文件到你的域名所对应的`根目录`或`xxx目录`下，`apple-app-site-association` 文件不需要扩展名。

**注意：** 苹果提供了一个[网页来验证](https://search.developer.apple.com/appsearch-validation-tool/)我们编写的这个 [apple-app-site-association](https://search.developer.apple.com/appsearch-validation-tool/) 是否合法有效。

```
https://<fully qualified domain>/.well-known/apple-app-site-association
根目录
https://uiwjs.github.io/apple-app-site-association

xxx目录
https://uiwjs.github.io/react-native-wechat/apple-app-site-association
```

打开 `Associated Domains` 开关，将 [`Universal Links`](https://developer.apple.com/documentation/safariservices/supporting_associated_domains) 域名加到配置上，如果 `URL` 地址是 https://uiwjs.github.io/apple-app-site-association，那么，
`Associated Domains` 中填写 `applinks: uiwjs.github.io`。

<img src="https://user-images.githubusercontent.com/1680273/89387904-c796aa80-d735-11ea-973c-f386f46cd16f.png" />

登录苹果开发者后台，在设置证书的页面找到 `Identifiers` 里，在对应的 `BundleId` 下勾选 `Associated Domains`

<img src="https://user-images.githubusercontent.com/1680273/89388154-32e07c80-d736-11ea-9724-e94cf6d468ca.png" />

</details>

<details>
<summary>iOS: -canOpenURL: failed for URL: "weixin://".</summary>

> ```
> -canOpenURL: failed for URL: "weixin://" - error: "The operation couldn’t be completed. (OSStatus error -10814.)"
> ```

设置 URL Schemes 并列为白名单，在 [`ios/<应用名称>/Info.plist`](https://github.com/uiwjs/react-native-wechat/blob/f6caea5b7d58dd05b7fc110ff76295c5e2be927b/example/ios/example/Info.plist#L23-L43) 中添加

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLName</key>
    <string>weixin</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>wx500b695a47bd364b</string>
    </array>
  </dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>weixin</string>
  <string>weixinULAPI</string>
</array>
```

</details>

<details>
<summary>iOS: RCTBridge required dispatch_sync to load RCTDevLoadingView.</summary>

> 错误内容： RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks

**错误解决方案**：可以通过下面代码可以解决，事实上我通过关闭 debug 浏览器页面就没有错误消息了。错误原因可能是你打开了 debug 浏览器，但是你模拟器并没有开启 debug 模式。

```diff
+ #if RCT_DEV
+ #import <React/RCTDevLoadingView.h>
+ #endif

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];

+  #if RCT_DEV
+    [bridge moduleForClass:[RCTDevLoadingView class]];
+  #endif
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"example" initialProperties:nil];
```

</details>

## 安装依赖

```bash
yarn add @uiw/react-native-alipay
# react-native version >= 0.60+
$ cd ios && pod install
```

## 使用

```js
import Wechat from '@uiw/react-native-wechat';

```

## 开发

```bash
cd example   # 进入实例 example 工程，根目录不需要安装，会引发错误
yarn install # 安装依赖

cd ios     # 进入 example/ios 目录安装依赖
pod instll # 安装依赖
```

## 其它

当前工程基于 [@brodybits/create-react-native-module](https://github.com/brodybits/create-react-native-module) 初始化。

```bash
npx create-react-native-module --package-identifier com.uiwjs.react.wechat --object-class-name RNWechat --generate-example Wechat --example-react-native-version 0.63.2 --module-name @uiw/react-native-wechat --github-account uiwjs --author-name "Kenny Wong" --author-email "wowohoo@qq.com"
```

## 相关连接 

- [微信(SDK)：iOS SDK v1.8.7.1](https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html)
- [微信(SDK)：iOS 接入指南](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)
- [@uiw/react-native-alipay](https://github.com/uiwjs/react-native-alipay) 支付宝支付。
