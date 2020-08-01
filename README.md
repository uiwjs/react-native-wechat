@uiw/react-native-wechat
-----

React Native 包使用微信分享、登录、收藏、支付等功能。

## 注意事项

<details>
<summary>iOS: 微信授权登录 Universal Link(通用链接)</summary>

> Universal Link(通用链接)是苹果在 iOS9 推出的，一种能够方便的通过传统 HTTPS 链接来启动 APP 的功能，可以使用相同的网址打开网址和 APP。  
> 看起来就是一条普通的 https 链接，当然是我们在该链接域名根目录配置过的一个链接，也可以在该链接中放置对应的H5页面。当用户的点击该链接，只要手机中安装了支持该链接的 APP 就会直接进入到 APP 中。如果没有安装APP则会跳转到 Safari 浏览器中，展示 H5 页面。对用户来说则是一个无缝跳转的过程。  

创建一个名为 `apple-app-site-association` 的文件，如下：

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "Team ID.com.uiwjs.XXX",
        "paths": ["/uiwjs/*"]
      },
      {
        "appID": "Team ID.com.uiwjs.XXX",
        "paths": ["/uiwjstest/*"]
      }
    ]
  }
}
```

上传该文件到你的域名所对应的`根目录`或`xxx目录`下，`apple-app-site-association` 文件不需要扩展名。

**注意：** 苹果提供了一个[网页来验证](https://search.developer.apple.com/appsearch-validation-tool/)我们编写的这个 [apple-app-site-association](https://search.developer.apple.com/appsearch-validation-tool/) 是否合法有效。

```
根目录
https://uiwjs.github.io/apple-app-site-association

xxx目录
https://uiwjs.github.io/react-native-wechat/apple-app-site-association
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

- [微信（SDK）：iOS SDK v1.8.7.1](https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html)
- [微信（SDK）：iOS 接入指南](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)
- [@uiw/react-native-alipay](https://github.com/uiwjs/react-native-alipay) 支付宝支付。
