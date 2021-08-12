import {
  LOGIN, LOGOUT, SIGNUP
} from '../helpers/constants';
import addUser from '../helpers/addUser';

export const SignUp = (user) => {
  addUser(user);
  return {
    type: SIGNUP,
    payload: user
  };
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