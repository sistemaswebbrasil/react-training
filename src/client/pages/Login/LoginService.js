import axios from 'axios';
import consts from '../../consts';

const userKey = '_training_user_key_';

export function login(values) {
  return submit(values, `${consts.OAPI_URL}/login`);
}

export function signup(values) {
  return submit(values, `${consts.OAPI_URL}/signup`);
}

function submit(values, url) {
  return axios
    .post(url, values)
    .then(resp => {
      localStorage.setItem(userKey, JSON.stringify(resp.data));
      return resp.data;
    })
    .catch(e => {
      return e.response.data.errors.forEach(error => toastr.error('Erro', error));
    });
}

export function validateToken(token) {
  if (token) {
    return axios
      .post(`${consts.OAPI_URL}/validateToken`, { token })
      .then(resp => {
        if (!resp.data.valid) {
          localStorage.removeItem(userKey);
        }
        return resp.data.valid;
      })
      .catch(e => false);
  } else {
    return false;
  }
}
