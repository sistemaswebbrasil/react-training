import axios from 'axios';
const userKey = '_training_user_key_';
const { token } = JSON.parse(localStorage.getItem(userKey)) || '';
let instance;

if (token) {
  instance = axios.create({
    baseURL: 'http://localhost:3003/api',
    headers: {
      Authorization: token
    }
  });
} else {
  instance = axios.create({
    baseURL: 'http://localhost:3003/api'
  });
}

instance.interceptors.request.use(
  function(config) {
    const { token } = JSON.parse(localStorage.getItem(userKey)) || '';
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
