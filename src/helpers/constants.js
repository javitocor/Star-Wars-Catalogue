export const URL = 'https://swapi.dev/api/';

export const initialStateAuth = {
  loggedIn: false,
  user: null
};

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export const initialStateItems = {
  error: null,
  pending: false,
  itemsList: [],
  item: {},
};

export const GET_SINGLE_ITEM = 'GET_SINGLE_ITEM';
export const GET_SINGLE_ITEM_PENDING = 'GET_SINGLE_ITEM_PENDING';
export const GET_SINGLE_ITEM_ERROR = 'GET_SINGLE_ITEM_ERROR';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const GET_ALL_ITEMS_PENDING = 'GET_ALL_ITEMS_PENDING';
export const GET_ALL_ITEMS_ERROR = 'GET_ALL_ITEMS_ERROR';

