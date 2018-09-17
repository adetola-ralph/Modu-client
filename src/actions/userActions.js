import * as types from './actionTypes';
import UserApi from '../api/userApi';


export const createUserSuccess = (user) => {
  return { type: types.CREATE_USER_SUCCESS, user };
}

export const createUser = (user) => {
  return (dispatch) => {
    return UserApi.createUser(user).then((res) => {
      const loginDetails = {
        email: user.email,
        password: user.password
      } 

      return dispatch(loginUser(loginDetails));
    }).catch((err) => {
      console.log(err);
    });
  };
}

export const loginUser = (details) => {
  return (dispatch) => {
    return UserApi.login(details)
  };
}