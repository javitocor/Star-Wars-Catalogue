import {
  initialStateItems,
  GET_SINGLE_ITEM, GET_SINGLE_ITEM_PENDING, GET_SINGLE_ITEM_ERROR,
  GET_ALL_ITEMS, GET_ALL_ITEMS_PENDING, GET_ALL_ITEMS_ERROR,
  UPDATE_ITEMS,
} from '../helpers/constants';

const itemReducer = (state = initialStateItems, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        pending: false,
        next: action.itemsList.next,
        itemsList: action.itemsList.results,
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
        item: action.item,
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
    case UPDATE_ITEMS:
      return {
        ...state,
        next: action.data.next,
        itemsList: [...state.itemsList, ...action.data.results],
      };
    default:
      return state;
  }
};

export default itemReducer;
