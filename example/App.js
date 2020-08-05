import React, { Component } from 'react';
import { Platform, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Wechat from '@uiw/react-native-wechat';

export default class App extends Component {
  state = {
    isInstall: false,
    isWXAppSupportApi: false,
    version: null,
  };
  async componentDidMount() {
    try {
      const reg = await Wechat.registerApp('wx500b695a47bd364b', 'https://uiwjs.github.io/react-native-wechat/apple-app-site-association');
      const isInstall = await Wechat.isWXAppInstalled();
      const isWXAppSupportApi = await Wechat.isWXAppSupportApi();
      const version = await Wechat.getApiVersion();
      console.log('version:', version);
      this.setState({
        isInstall,
        isWXAppSupportApi,
        version
      });
    } catch (error) {
      console.log('code>', error.code);
      console.log('message>', error.message);
      console.log('error>', error);
    }
  }
  openWXApp = async () => {
    const isOpen = await Wechat.openWXApp();
    console.log('isOpen:', isOpen);
  }
  render() {
    const { isInstall, isWXAppSupportApi, version } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>☆Wechat Example☆</Text>
          <Text>
            <Text style={styles.instructions}>
              <Text style={{color: isInstall ? 'green' : 'red'}}>{isInstall ? '已经' : '没有'}</Text>安装微信，
            </Text>
            <Text style={styles.instructions}>
              当前微信的版本<Text style={{color: isWXAppSupportApi ? 'green' : 'red'}}>{isWXAppSupportApi ? '支持' : '不支持'}</Text> OpenApi
            </Text>
            <Text> - v{version}</Text>
          </Text>
          <Button
            onPress={this.openWXApp}
            title="打开微信 APP"
            color="#841584"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
