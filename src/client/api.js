import axios from 'axios';
const userKey = '_training_user_key_';
const { token } = JSON.parse(localStorage.getItem(userKey)) || '';
let instance;

if (token) {
  instance = axios.create({
    baseURL: '/api/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
} else {
  instance = axios.create({
    baseURL: '/api/'
  });
}

instance.interceptors.request.use(
  function(config) {
    const { token } = JSON.parse(localStorage.getItem(userKey)) || '';
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
