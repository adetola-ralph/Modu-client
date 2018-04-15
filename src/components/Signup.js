import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import GradientBackground from './GradientBackground';
 
class Signup extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: {
      height: 0
    }
  });

  linkToLogin () {
    this.props.navigation.navigate('Main');
  }

  render () {
    return (
      <View style={styles.container}>
        <GradientBackground/>

        <Image style={styles.logo} source={(require('../../assets/modu_logo_text.png'))}></Image>

        <Text style={styles.logInText}> Signup </Text>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/nameIc.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='First Name'
           placeholderTextColor = "#ffffff"
           autoCapitalize = "none"></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/nameIc.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='Last Name'
           placeholderTextColor = "#ffffff"
           autoCapitalize = "none"></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/email.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='Email Address'
           placeholderTextColor = "#ffffff"
           autoCapitalize = "none"></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/password.png'))}></Image>
          <TextInput style={styles.textInput}
          placeholder='Password'
          placeholderTextColor = "#ffffff"
          autoCapitalize = "none"></TextInput>

          <Image style={styles.textViewImg} source={(require('../../assets/switchPassword.png'))}></Image>
        </View>

        <TouchableOpacity
          style = {styles.submitButton}>
          <Text style = {styles.btnText}> Sign Up </Text>
        </TouchableOpacity>

        <View style={styles.signupHolder}>
          <Text style={styles.noAccount}> Already have an account? </Text>
          <TouchableOpacity onPress={this.linkToLogin.bind(this)}>
            <Text style={styles.signup}> Log In!</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.terms}> By signing in / signing up you agree to the </Text>
        <Text style={styles.policy}>terms of service and privacy policy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    width: '100%',
    height: '100%', 
    margin:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  }, 
  logInText:{
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
    marginTop:70,
    marginBottom: 20,
  },
  btnView: {
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    width: '80%',
    flexDirection:'row',
    backgroundColor: 'transparent',
    marginTop: 12,
  },
  textViewImg: {
    height:15,
    width:15,
    marginLeft: 12,
    marginTop: 12,
    marginRight: 12,
  },
  textInput: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    height: 30,
    marginTop: 5,
    width: 250,
  },  
  submitButton: {
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    backgroundColor: '#ffffff',
    marginTop: 30,
    width:'80%',
    justifyContent:'center',
    alignItems: 'center',
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  btnText: {
    color:'rgba(255, 43, 38, 0.65)',
    fontSize: 15,
    fontWeight: 'bold',
  }, 
  signupHolder: {
    marginTop: 20,
    flexDirection:'row',
  },
  noAccount: {
    color: '#fff',
  },
  signup: {
    color: '#fff',
    fontWeight:'bold'
  },
  terms: {
    color: '#fff',
    fontSize: 9,
    marginTop: 80,
  },
  policy: {
    color: '#fff',
    fontSize: 9,
  },
});

export default Signup;