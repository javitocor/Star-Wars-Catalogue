import searchApi from './searchAPI';

const valueCheck =(item, keys)=>{
  var tmp = [];
  for(var k in keys) {
    if(typeof(item[keys[k]]) === 'object' || keys[k] === 'homeworld') {
      tmp.push(keys[k]);
    }
  }
  return tmp;
};

async function itemChecker (item, keys) {
  let finalObj = {};
  let objectKeys = valueCheck(item, keys);
  for (let index = 0; index < objectKeys.length; index++){
    let key = objectKeys[index];
    let data = await infoChecker (item, key);
    if(data){
      finalObj[key] = data;
    } else {
      finalObj[key] = [];
    }
  }
  return [finalObj, objectKeys];
}

const infoChecker = async (item, key) => {
  let arrayInfo = item[key];
  let tempArray = [];
  if(typeof(arrayInfo) === 'string' ) {
    let homeworld = await searchApi(arrayInfo)
    tempArray.push({name:homeworld.name, url:homeworld.url});
  } else {
    if (arrayInfo.length === 0) return false
    for (const link of arrayInfo){
      let response = await searchApi(link);
      if(key==='films'){
        tempArray.push({title:response.title, url:response.url});
      } else {
        tempArray.push({name:response.name, url:response.url});
      };
    }
  }  
  return tempArray
}

export default itemChecker;