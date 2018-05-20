import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Login from './Login';
import { createUser } from '../actions/userActions'

import GradientBackground from './GradientBackground';
 
class Signup extends Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: {
      height: 0
    }
  });

  linkToLogin = (signup, user, alert) => {
    let isValid = true;
    let message = '';

    if (!user.firstname || user.firstname === '') {
      isValid = false;
      message = 'First name cannot be blank';
    }

    if (!user.lastname || user.lastname === '' ) {
      isValid = false;
      message = 'Last name cannot be blank';
    }

    if (!user.email || user.email === '' || user.email.indexOf('@') === -1) {
      isValid = false;
      message = 'Email not properly formatted';
    }

    if (!user.password || user.password === '' || user.password.length < 6) {
      isValid = false;
      message = 'Password cannot be less than 6 characters';
    }

    if (isValid) { 
      signup(user) 
    } else {
      alert.alert(
        'Unable to Signup',
        message,
        [
          {text: 'OK', onPress: () => {}},
        ],
        { cancelable: true }
      )
    }
    
  }

  render () {
    let user = {
      firstname: '',
      lastname: '',
      email: '',
      password:'',
    }
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
           autoCapitalize = "none"
           onChangeText={(firstname) => { user.firstname = firstname }}></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/nameIc.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='Last Name'
           placeholderTextColor = "#ffffff"
           autoCapitalize = "none"
           onChangeText={(lastname) => { user.lastname = lastname }}></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/email.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='Email Address'
           placeholderTextColor = "#ffffff"
           autoCapitalize = "none"
           onChangeText={(email) => { user.email = email }}></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/password.png'))}></Image>
          <TextInput style={styles.textInput}
          placeholder='Password'
          secureTextEntry = {true}
          placeholderTextColor = "#ffffff"
          autoCapitalize = "none"
          onChangeText={(password) => { user.password = password }}></TextInput>

          <Image style={styles.textViewImg} source={(require('../../assets/switchPassword.png'))}></Image>
        </View>

        <TouchableOpacity
           onPress= {() => { 
             this.linkToLogin(this.props.signup, user, Alert);
            }}
          style = {styles.submitButton}
        >         
          <Text style = {styles.btnText}> Sign Up </Text>
        </TouchableOpacity>

        
        <View style={styles.signupHolder}>
          <Text style={styles.noAccount}> Already have an account? </Text>
          
            <Text onPress={() => this.props.navigation.goBack(null)} style={styles.signup}> Log In!</Text>
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
    resizeMode:'contain',
  }, 
  logInText: {
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
    resizeMode:'contain',

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

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    allUsers: state.allUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(createUser(user)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);