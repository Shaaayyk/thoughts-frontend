function setToken(token) {
  if (token) {
    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token');
  }
}

function getToken() {
  let token = localStorage.getItem('token')
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log(payload)
    // check to see if token is expired and if so remove token from localstorage
    // and set token to null
  }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function removeToken() {
  localStorage.removeItem('token');
}

export default {
  setToken,
  getToken,
  getUserFromToken,
  removeToken,
}