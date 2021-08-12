import 'regenerator-runtime/runtime';
import { URL } from './constants';

const callApi = async (resource = null, link= null) => {
  let Url = '';

  if (attribute !== null) {
    Url = `${URL + resource}`;
  } else {
    Url = `${URL + resource + '/' +  attribute}`;
  }

  try {
    const response = await fetch(Url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default callApi;