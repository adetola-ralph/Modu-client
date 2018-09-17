import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import TabNav from './TabNavigation';
import Feeds from '../Feeds';
import { Text } from 'react-native';


const DrawerNav = new DrawerNavigator({
    Landing : {
        screen: TabNav
    },
    events : {
        screen: Feeds
    }
}, {
    drawerPosition: 'left',
    drawerWidth: 300,
    title: 'Main',
    initialRouteName: 'Landing',
});



export default DrawerNav;