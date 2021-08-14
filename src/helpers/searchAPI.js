import 'regenerator-runtime/runtime';

const searchApi = async (link) => {
  let Url = link;

  try {
    const response = await fetch(Url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default searchApi;