import axios from 'axios';
const userKey = '_training_user_key_';
const { token } = JSON.parse(localStorage.getItem(userKey)) || '';

/*
// const instance = axios.create({
//   baseURL: 'http://localhost:3003/api'
// });

const instance = axios.create({
  baseURL: 'http://localhost:3003/api',
  headers: { Authorization: token }
});

if (token) {
  instance.defaults.headers.common['Authorization'] = token;
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}

export default instance;
*/
let instance;

if (token) {
  console.log('Aqui');
  instance = axios.create({
    baseURL: 'http://localhost:3003/api',
    headers: {
      Authorization: token
    }
  });
} else {
  console.log('Aqui2');
  instance = axios.create({
    baseURL: 'http://localhost:3003/api'
  });
}

instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // console.log(JSON.parse(localStorage.getItem(userKey)).token);
    // console.log(config.headers.Authorization);
    const { token } = JSON.parse(localStorage.getItem(userKey)) || '';
    if (token && !config.headers.Authorization) {
      // console.log('Deveria adicionar o token agora');
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// const instance = axios.create({
//   baseURL: 'http://localhost:3003/api',
//   headers: {
//     Authorization: token
//   }
// });

export default instance;
