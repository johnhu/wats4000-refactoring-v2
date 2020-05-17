import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set APPID on each request
    config.params.APPID = 'd9947bfbe4d5f42fa39c0d5e08ff915f';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });