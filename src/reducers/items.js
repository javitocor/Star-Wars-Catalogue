import {
  initialStateItems,
  GET_SINGLE_ITEM, GET_SINGLE_ITEM_PENDING, GET_SINGLE_ITEM_ERROR,
  GET_ALL_ITEMS, GET_ALL_ITEMS_PENDING, GET_ALL_ITEMS_ERROR,
} from '../helpers/constants';

const itemReducer = (state = initialStateItems, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        pending: false,
        itemsList: action.itemsList,
      };
    case GET_ALL_ITEMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_ITEM:
      return {
        ...state,
        pending: false,
        item: action.player,
      };
    case GET_SINGLE_ITEM_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_ITEM_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default itemReducer;
