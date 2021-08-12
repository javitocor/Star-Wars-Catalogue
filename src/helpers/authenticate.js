const authenticate = (user) =>{
  if (localStorage.getItem('sw-users')) {
    const allUsers = JSON.parse(localStorage.getItem('sw-users'));
    var result = allUsers.filter(obj => {
      return obj.username === user.username && obj.password === user.password
    })
  }
  if (result.length >= 1) {
    return user;
  }
  return false;
}



export default authenticate;