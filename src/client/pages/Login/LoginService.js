import consts from '../../consts';
import api from '../../services/api';

const userKey = '_training_user_key_';

export function login(values) {
  return submit(values, `login`);
}

export function logout() {
  localStorage.removeItem(userKey);
  delete api.defaults.headers.common['Authorization'];
  return true;
}

export function signup(values) {
  return submit(values, `signup`);
}

function submit(values, url) {
  return api
    .post(url, values)
    .then(resp => {
      localStorage.setItem(userKey, JSON.stringify(resp.data));
      // api.defaults.headers.common['Authorization'] = resp.data.token;
      // api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      return resp.data;
    })
    .catch(e => {
      localStorage.removeItem(userKey);
      return Promise.reject(e.response);
    });
}

export function validateToken(token) {
  if (token) {
    return api
      .get(`profile`)
      .then(() => true)
      .catch(() => false);
  } else {
    return false;
  }
}
