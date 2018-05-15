import * as types from './actionTypes';
import UserApi from '../api/userApi';


export const createUserSuccess = (user) => {
  debugger;
  return { type: types.CREATE_USER_SUCCESS, user };
}

export const createUser = user =>
  ((dispatch) => {
    debugger;
    return UserApi.createUser(user).then((authUser) => {
      debugger;
      dispatch(createUserSuccess(authUser));
    }).catch((err) => {
      console.log(err);
    });
  });
