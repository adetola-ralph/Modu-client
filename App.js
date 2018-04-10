import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import configureStore from './src/store/';
import Login from './src/components/Login';

const store = configureStore();

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Main: {
        screen: Login
      }
    });

    return (
      <Provider store={store}> 
        <MainNavigator/>
      </Provider>
    );
  }
}

// {/* const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); */}
