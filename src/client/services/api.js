import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: '/api/'
});

api.postOrPut = async (url, id, data, config = {}) => {
  const method = id ? 'put' : 'post';
  const apiUrl = id ? `${url}/${id}` : url;
  return await api[method](apiUrl, data, config);
};

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
