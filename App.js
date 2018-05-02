import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import configureStore from './src/store/';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import DrawerNavigation from './src/components/navigation/DrawerNavigation';


const store = configureStore();
let toggle = true;

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Login: {
        screen: Login
      },
      Signup: {
        screen: Signup
      },
      DrawerNavigation: {
        screen: DrawerNavigation,
        navigationOptions: {
          title: 'modu'
        }
      }
    }, {
      navigationOptions: ({navigation}) => ({
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#FD2B30',
        headerLeft: <TouchableOpacity 
        onPress={() => {
          (toggle) ?
            navigation.navigate('DrawerOpen'): navigation.navigate('DrawerClose');
            toggle = !toggle;
          }}
        >
          <Image source={(require('./assets/menubar.png'))} style={{marginLeft: 15,width: 24, height: 24, resizeMode:'contain'}} />
      </TouchableOpacity>,
      headerRight: <TouchableOpacity 
      onPress={() => {
        }}
      >
        <Image source={(require('./assets/searchIcon.png'))}  style={{marginRight: 15,width: 24, height: 24, resizeMode:'contain'}} />
    </TouchableOpacity>,

      })
    });

    return (
      <Provider store={store}> 
        <MainNavigator/>
      </Provider>
    );
  }
}
