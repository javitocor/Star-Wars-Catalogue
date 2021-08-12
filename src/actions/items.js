import {
  GET_SINGLE_ITEM, GET_SINGLE_ITEM_PENDING, GET_SINGLE_ITEM_ERROR,
  GET_ALL_ITEMS, GET_ALL_ITEMS_PENDING, GET_ALL_ITEMS_ERROR,
} from '../helpers/constants';

export const getAllItems = itemsList => ({
  type: GET_ALL_ITEMS,
  itemsList,
});

export const getAllItemsPending = () => ({
  type: GET_ALL_ITEMS_PENDING,
});

export const getAllPlayersError = error => ({
  type: GET_ALL_ITEMS_ERROR,
  error,
});

export const getSingleItem = item => ({
  type: GET_SINGLE_ITEM,
  item,
});

export const getSingleItemPending = () => ({
  type: GET_SINGLE_ITEM_PENDING,
});

export const getSingleItemError = error => ({
  type: GET_SINGLE_ITEM_ERROR,
  error,
});