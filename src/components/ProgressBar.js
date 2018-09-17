import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
});

export const ProgressBar = () => ( 
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#ffffff" />
  </View>
);

