import {
  LOGIN, LOGOUT, SIGNUP
} from '../helpers/constants';
import addUser from '../helpers/addUser';
import authenticate from '../helpers/authenticate';
import history from '../history';

export const SignUp = (user) => {
  addUser(user);
  return {
    type: SIGNUP,
    payload: user
  };
};

export const authenticateUser = (user, redirectUrl) => (dispatch) => {
  if (authenticate(user)){
    dispatch(logIn(user));
  } else {
    return false;
  }
};

export const logIn = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const logOut = () => {
  return {
    type: LOGOUT
  };
};