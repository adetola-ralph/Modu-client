import * as types from '../actions/actionTypes';

const initialState = {
  currentUser: {},
  allUsers: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return { ...state, currentUser: action.user };
    case types.CREATE_USER_SUCCESS:
      return { ...state, currentUser: action.user };
    default:
      return state;
  }
};

export default userReducer;
