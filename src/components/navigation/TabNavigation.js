import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Image } from 'react-native';
import Events from '../Events';
import Home from '../Home';
import Profile from '../Profile';


export default TabNavigator (
    {
      Home: { 
        screen: Home,
        label: 'Home',
       },
      
      AddReview: { 
          screen: Home,
          navigationOptions: ({ navigation }) => ({
            title: 'Review',
          }),
         },
      Checkin: { 
          screen: Home,
          label: 'Chekins',
         },
      Events: { 
          screen: Events,
          label: 'Events',
         },
      
      Profile: { 
          screen: Profile,
          label: 'Profile',
         },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconUrl;
          if (routeName === 'Home') {
            iconUrl = (require('../../../assets/homeTab.png'));
          } else if (routeName === 'Events') {
            iconUrl = (require('../../../assets/event.png'));
          } else if (routeName === 'AddReview') {
            iconUrl = (require('../../../assets/addReview.png'));
          } else if (routeName === 'Checkin') {
            iconUrl = (require('../../../assets/orangeLogo.png'));
          }  else if (routeName === 'Profile') {
            iconUrl = (require('../../../assets/profileTab.png'));
          }

          return (
            (tintColor === '#ffffff') ? 
            <Image source={require('../../../assets/moduLogo.png')} style={{height:20, width:20, resizeMode:'contain'}}/> : 
            <Image source={iconUrl} style={{height:20, width:20, resizeMode:'contain'}}  />
          );
      }}),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: 'rgba(208, 58, 27, 0.9469)',
        activeBackgroundColor:'rgba(208, 58, 27, 0.9469)',
        showLabel: true,
        tabStyle: {
            // borderTopRightRadius: 10,
            // borderTopLeftRadius: 10,
            // borderTopWidth: 1, 
            width:50,
            height:300,
            marginLeft:0,
            padding:3,
			      borderTopColor: 'white'
        },
        style: {
            
		},
      },
      animationEnabled: true,
      swipeEnabled: true,
    }
  );