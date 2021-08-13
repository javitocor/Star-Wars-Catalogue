import APIcalls from './APIcalls';

const valueCheck =(item, keys)=>{
  var tmp = [];
  for(var k in keys) {
    if(typeof(item[k]) === 'object') {
      tmp.push(k);
    }
  }
  return tmp;
};

async function itemChecker (item, keys) {
  let finalObj = {};
  let tempObj = {};
  let objectKeys = valueCheck(item, keys);
  for (let index = 0; index < objectKeys.length; index++){
    for(let y=0;y<item[objectKeys[index]].length; y++){

      const url = item[objectKeys[index]][y];
      const response = await APIcalls(null, url, null, 'temp');

      if(objectKeys[index]==='films'){
        tempObj = {title:response.title, url:response.url}
      } else {
        tempObj = {name:response.name, url:response.url}
      };

      if(finalObj.hasOwnProperty(objectKeys[index])){
        finalObj[objectKeys[index]].push(tempObj);
      } else {
        finalObj[objectKeys[index]] = [tempObj];
      };
      
      return [finalObj, objectKeys];
    }
  }
}

export default itemChecker;