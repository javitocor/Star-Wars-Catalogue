import 'regenerator-runtime/runtime';
import { URL } from './constants';
import {
  getAllItems, getAllItemsPending, getAllItemsError, 
  getSingleItem, getSingleItemPending, getSingleItemError,
  updateItems
} from '../actions/items';

const callApi = (resource = null, link= null, update=null) => async dispatch => {
  let Url = '';

  if (resource !== null) {
    Url = `${URL + resource}`;
  } else {
    Url = link;
  }

  try {
    if (resource !== null) {
      dispatch(getAllItemsPending());
    } else {
      dispatch(getSingleItemPending());
    }

    const response = await fetch(Url, { mode: 'cors' });
    const data = await response.json();
    if (resource !== null) {
      dispatch(getAllItems(data));
    } else if (update !== null && link !== null) {
      dispatch(updateItems(data));
    } else {
      dispatch(getSingleItem(data));
    }
    return data;   
  } catch (error) {
    if (resource !== null) { 
      dispatch(getAllItemsError(error));
    } else {
      dispatch(getSingleItemError(error));
    }
    console.log(error);
  }
};

export default callApi;