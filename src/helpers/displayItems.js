const displayItems = resource =>{
  if (resource === 'vehicles' || resource === 'starships' ){
    return ['name', 'model'];
  } else if (resource === 'people'){
    return ['name', 'birth_year'];
  } else if (resource === 'planets'){
    return ['name', 'population'];
  } else if (resource === 'films'){
    return ['title', 'director'];
  } else if (resource === 'species'){
    return ['name', 'language'];
  } else {
    return
  };
};

export default displayItems;