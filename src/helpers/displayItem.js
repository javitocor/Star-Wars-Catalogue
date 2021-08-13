const displayItem = (item) => {
  var keys = [];
  for(var k in item) keys.push(k);

  keys= keys.filter(item => {
      if (item === 'created' || item === 'edited' || item === 'url'){
        return false;
    }
    return true;
  });
  return keys;
}

export default displayItem;
