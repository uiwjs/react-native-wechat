# @uiw/react-native-wechat

## Getting started

`$ npm install @uiw/react-native-wechat --save`

### Mostly automatic installation

`$ react-native link @uiw/react-native-wechat`

## Usage
```javascript
import RNWechat from '@uiw/react-native-wechat';

// TODO: What to do with the module?
RNWechat;
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

- [微信（SDK）：iOS定位SDK v1.8.7.1](https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html)
