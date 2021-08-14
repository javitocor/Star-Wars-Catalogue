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


const valueCheck =(item, keys)=>{
  var tmp = [];
  for(var k in keys) {
    if(typeof(item[keys[k]]) === 'object') {
      tmp.push(keys[k]);
    }
  }
  return tmp;
};

var item={name:'aaaa',planet:'dddd', people:['cccc','vvvvvv'], created:'ffff'}
var keys = displayItem(item)
var tmp = valueCheck(item, keys)
console.log(tmp)


async function itemChecker (item, keys) {
  let finalObj = {};
  let objectKeys = valueCheck(item, keys);
  for (let index = 0; index < objectKeys.length; index++){
    var key = objectKeys[index];
    var data = await infoChecker (item, key);
    if(finalObj.hasOwnProperty(key)){
      finalObj[key].push(data);
    } else {
      finalObj[key] = [data];
    };      
  }
  return [finalObj, objectKeys];
}

async function infoChecker (item, key) {
  var arrayInfo = item[key];
  let tempObj = {};
  for(let y=0;y<arrayInfo.length; y++){
    const url = arrayInfo[y];
    const response = await APIcalls(null, url, null, 'temp');
    if(arrayInfo==='films'){
      tempObj = {title:response.title, url:response.url}
    } else {
      tempObj = {name:response.name, url:response.url}
    };
  }
  return tempObj
}