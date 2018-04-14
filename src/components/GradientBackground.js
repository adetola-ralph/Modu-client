import React, { Component } from 'react';
import { Image, AppRegistry } from 'react-native';

class GradientBackground extends Component {

  render () {
    const resizeMode = 'stretch';
    return (
      <Image style={{
          backgroundColor: '#ccc',
          flex: 1,
          resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center'
        }} 
        source={require('../../assets/GradientBg.png')}
      />
    );
  }
}

AppRegistry.registerComponent('GradientBackground', () => GradientBackground);

export default GradientBackground;
