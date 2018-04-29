import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Image } from 'react-native';
import Events from '../Events';
import Home from '../Home';


export default TabNavigator (
    {
      Events: { 
          screen: Events,
          label: 'Events',
         },
      AddReview: { 
          screen: Home,
          navigationOptions: ({ navigation }) => ({
            title: 'Add Review',
          }),
         },
      Checkin: { 
          screen: Home,
          label: 'Chekins',
         },
      Home: { 
          screen: Home,
          label: 'Home',
         },
      Profile: { 
          screen: Home,
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
            iconUrl = (require('../../../assets/moduLogo.png'));
          }  else if (routeName === 'Profile') {
            iconUrl = (require('../../../assets/profileTab.png'));
          }

          console.log(tintColor, "----------------") ;
          return (
            (tintColor === '#ffffff') ? 
            <Image source={require('../../../assets/checkinTab.png')} style={{height:20, width:20, resizeMode:'contain'}}/> : 
            <Image source={iconUrl} style={{height:20, width:20, resizeMode:'contain'}}  />
          );  

          
        },
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#FF2B26',
        activeBackgroundColor:'#FF2B26',
        showLabel: true,
        tabStyle: {
            // borderTopRightRadius: 10,
            // borderTopLeftRadius: 10,
            // borderTopWidth: 1, 
            width:50,
            height:300,
            marginLeft:0,
			      borderTopColor: 'white'
        },
        style: {
            
		},
      },
      animationEnabled: true,
      swipeEnabled: true,
    }
  );