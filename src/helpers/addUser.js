function objectAdder(user) {
  const allUsers = JSON.parse(localStorage.getItem('sw-users'));
  allUsers.push(user);
  return allUsers;
}


const addUser = (user) =>{
  if (localStorage.getItem('sw-users')) {
    localStorage.setItem('sw-users', JSON.stringify(objectAdder(user)));
  } else {
    let add = [];
    add.push(user)
    localStorage.setItem('sw-users', JSON.stringify(add));
  }
}



export default addUser;