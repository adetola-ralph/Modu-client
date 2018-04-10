import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo';

class Login extends Component {
  static navigationOptions = () => ({
    
  }) 

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> log in component</Text>
      </View>
    );
  }
}

export default Login;