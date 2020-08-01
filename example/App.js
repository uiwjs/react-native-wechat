import React, { Component } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Wechat from '@uiw/react-native-wechat';

export default class App extends Component {
  state = {
    isInstall: false,
    isWXAppSupportApi: false,
    version: null,
  };
  async componentDidMount() {
    const isInstall = await Wechat.isWXAppInstalled();
    const isWXAppSupportApi = await Wechat.isWXAppSupportApi();
    const version = await Wechat.getApiVersion();
    this.setState({
      isInstall, isWXAppSupportApi, version
    });
  }
  render() {
    const { isInstall, isWXAppSupportApi, version } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>☆Wechat Example☆</Text>
          <Text>
            <Text style={styles.instructions}>
              <Text style={{color: isInstall ? 'green' : 'red'}}>{isInstall ? '有' : '没有'}</Text>安装微信，
            </Text>
            <Text style={styles.instructions}>
              当前微信的版本<Text style={{color: isWXAppSupportApi ? 'green' : 'red'}}>{isWXAppSupportApi ? '支持' : '不支持'}</Text> OpenApi
            </Text>
            <Text>{version}</Text>
          </Text>
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
