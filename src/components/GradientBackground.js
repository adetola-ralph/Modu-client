import React, { Component } from 'react';
import { Image, AppRegistry } from 'react-native';
import { LinearGradient } from 'expo';


class GradientBackground extends Component {

  render () {
    const resizeMode = 'stretch';
    return (
      <LinearGradient
          colors={['rgba(242, 129, 40, 0.88)',  'rgba(208, 58, 27, 0.88)', 'rgba(208, 58, 27, 0.9469)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
    );
  }
}

AppRegistry.registerComponent('GradientBackground', () => GradientBackground);

export default GradientBackground;
