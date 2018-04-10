import * as types from './actionTypes';
import UserApi from '../api/userApi';


export const createUserSuccess = user => ({ type: types.CREATE_USER, user });

export const createUser = user =>
  ((dispatch) => {
    UserApi.createUser(user).then((authUser) => {
      dispatch(createUserSuccess(authUser));
    }).catch((err) => {
      throw (err);
    });
  });
