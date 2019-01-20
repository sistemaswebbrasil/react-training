import axios from 'axios';
const userKey = '_training_user_key_';

const { token } = JSON.parse(localStorage.getItem(userKey));

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: `http://localhost:3003/api`
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = token;

export default instance;
