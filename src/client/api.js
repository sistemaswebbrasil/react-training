import axios from 'axios';
const userKey = '_training_user_key_';
const { token } = JSON.parse(localStorage.getItem(userKey)) || '';

const instance = axios.create({
  baseURL: `http://localhost:3003/api`
});

if (token) {
  instance.defaults.headers.common['Authorization'] = token;
} else {
  instance.defaults.headers.common['Authorization'] = null;
}

export default instance;
