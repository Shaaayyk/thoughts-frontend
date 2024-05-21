import axios from 'axios';

const jwt = null

const apiUrls = {
  development: 'http://localhost:3001/api',
  production: '',
}

const api = axios.create({
  baseURL: window.location.hostname === 'localhost' ? apiUrls.development : apiUrls.production,
  headers: {
      Authorization: `Bearer ${jwt}`,
      'Access-Control-Allow-Origin': '*'
  }
})

export default api;