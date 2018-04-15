import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import configureStore from './src/store/';
import Login from './src/components/Login';
import Signup from './src/components/Signup';

const store = configureStore();

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Main: {
        screen: Login
      },
      Signup: {
        screen: Signup
      }
    });

    return (
      <Provider store={store}> 
        <MainNavigator/>
      </Provider>
    );
  }
}
