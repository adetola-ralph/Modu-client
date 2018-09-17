import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, createUserSuccess } from '../actions/userActions';
import GradientBackground from './GradientBackground';
import { ProgressBar } from './ProgressBar';
 
class Login extends Component {
  constructor() {
    super();
    this.state={
      loading: false,
    }
  }

  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: {
      height: 0
    }
  });

 linkToSignup = () => {
    this.props.navigation.navigate('Signup');
  }

  linkToTabs  = () => {
    this.props.navigation.navigate('DrawerNavigation');
  }

  login = (login, details, setCurrentUser, alert) => {
    let isValid = true;
    let message = '';

    if (!details.email || details.email === '' || details.email.indexOf('@') === -1) {
      message = 'Incorrect email';
      isValid = false;
    }

    if (!details.password || details.password === '' || details.password.length < 6) {
      message = 'Password cannot be less than 6 characters';
      isValid = false;
    }

    if (isValid) {
      this.setState({ loading: true });

      login(details).then((res) => {
        setCurrentUser(res.body);
      }).then(() => {
        this.setState({ loading: false });
        this.linkToTabs();
      }).catch((err) => {
        this.setState({ loading: false });
        message = 'Incorrect email or password ';

        alert.alert(
          'Unable to Login',
          message,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed in Login')},
          ],
          { cancelable: true }
        );
      });
    } else {
      alert.alert(
        'Unable to Login',
        message,
        [
          {text: 'OK', onPress: () => {}},
        ],
        { cancelable: true }
      );
    }
  }

  render () {
    const details = {
      email : '',
      password : ''
    }
    return (
      <View style={styles.container}>
        <GradientBackground />

        { this.state.loading && 
          <ProgressBar />
        }
        

        <Image style={styles.logo} source={(require('../../assets/modu_logo_text.png'))}></Image>

        <Text style={styles.logInText}> Login </Text>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/email.png'))}></Image>
          <TextInput style={styles.textInput}
           placeholder='Email Address'
           onChangeText = {(text)=> { 
            details.email = text
          }}
           placeholderTextColor = "#ffffff"
           autoCapitalize = "none"></TextInput>
        </View>

        <View style={styles.btnView}>
          <Image style={styles.textViewImg} source={(require('../../assets/password.png'))}></Image>
          <TextInput style={styles.textInput}
          placeholder='Password'
          placeholderTextColor = "#ffffff"
          onChangeText = {(text)=> { 
            details.password = text
          }}
          secureTextEntry = {true}
          autoCapitalize = "none"></TextInput>

          <Image style={styles.textViewImg} source={(require('../../assets/switchPassword.png'))}></Image>
        </View>
        <Text style={styles.forgotPassword}> Forgot Password? </Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => { this.login(this.props.login, details, this.props.setCurrentUser, Alert)}}>
          <Text style = {styles.btnText}> Log In </Text>
        </TouchableOpacity>

        <View style={styles.signupHolder}>
          <Text style={styles.noAccount}> Don't have an account? </Text>
          <TouchableOpacity onPress={this.linkToSignup}>
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
    login: (details) => dispatch(loginUser(details)),
    setCurrentUser: (user) => dispatch(createUserSuccess(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);