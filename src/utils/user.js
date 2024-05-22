import tokenUtil from './token.js'
import api from './apiConfig.js'


async function signup(credentials) {
  try {
    const response = await api.post('/users/signup', credentials)
    console.log(response)
    return tokenUtil.setToken(response.data.token)
  } catch (error) {
    throw new Error('Email already taken!');
  }
}

async function login(credentials) {
  try {
    const response = await api.post('/users/login', credentials)
    console.log(response)
    return tokenUtil.setToken(response.data.token)
  } catch (error) {
    throw new Error('Bad credentials!');
  }
}

function getUser() {
  return tokenUtil.getUserFromToken()
}

function logout() {
  tokenUtil.removeToken()
}

export default {
  signup,
  login,
  getUser,
  logout,
}