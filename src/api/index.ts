import axios from 'axios';

// const BASE_URL = "";
const LOCAL_SERVER = 'https://911b-175-192-26-222.ngrok-free.app';

const request = axios.create({
  baseURL: LOCAL_SERVER,
});

request.defaults.timeout = 2500;

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },

  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default request;
