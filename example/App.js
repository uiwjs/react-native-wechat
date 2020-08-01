import React, { Component } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Wechat from '@uiw/react-native-wechat';

export default class App extends Component {
  state = {
    message: '--'
  };
  async componentDidMount() {
    const isInstall = await Wechat.isWXAppInstalled();
    console.log(':isInstall:', isInstall);
    // RNWechat.sampleMethod('Testing', 123, (message) => {
    //   this.setState({
    //     message
    //   });
    // });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>☆Wechat Example☆</Text>
          <Text style={styles.instructions}>{this.state.message}</Text>
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
