import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import GradientBackground from './GradientBackground';
 
class Login extends Component {
  constructor() {
    super();
    this.state={
      user: {}
    }
  }

  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: {
      height: 0
    }
  });

 linkToSignup () {
    this.props.navigation.navigate('Signup');
  }

  linkToTabs () {
    this.props.navigation.navigate('DrawerNavigation', {user });
  }

  render () {
    user  = ( this.props.navigation.state.params)? this.props.navigation.state.params.user: undefined;

    return (
      <View style={styles.container}>
        <GradientBackground/>

        <Image style={styles.logo} source={(require('../../assets/modu_logo_text.png'))}></Image>

        <Text style={styles.logInText}> Login </Text>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/email.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='Email Address'
           placeholderTextColor = "#ffffff"
           value={(user)? user.email: ""} 
           autoCapitalize = "none"></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/password.png'))}></Image>
          <TextInput style={styles.textInput}
          placeholder='Password'
          placeholderTextColor = "#ffffff"
          secureTextEntry = {true}
          value={(user)? user.password: ""} 
          autoCapitalize = "none"></TextInput>

          <Image style={styles.textViewImg} source={(require('../../assets/switchPassword.png'))}></Image>
        </View>
        <Text style={styles.forgotPassword}> Forgot Password? </Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.linkToTabs.bind(this)}>
          <Text style = {styles.btnText}> Log In </Text>
        </TouchableOpacity>

        <View style={styles.signupHolder}>
          <Text style={styles.noAccount}> Don't have an account? </Text>
          <TouchableOpacity onPress={this.linkToSignup.bind(this)}>
            <Text style={styles.signup}> Sign Up!</Text>
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
    resizeMode:'contain',
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
    resizeMode:'contain'
  },
  textInput: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    height: 30,
    marginTop: 5,
    width: 250,
  },
  forgotPassword: {
    color: 'rgba(255, 255, 255, 0.73)',
    marginRight: 50,
    alignSelf: 'flex-end',
    marginTop: 10,
    
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
    marginTop: 170,
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
    signup: (user) => dispatch({ type: 'CREATE_USER', user: user }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);