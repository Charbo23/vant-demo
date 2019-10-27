import axios from 'axios';

export const requestAll = axios.all;

export const createRequest = (config) => axios.create(config);

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000
})

//拦截请求
request.interceptors.request.use((originConfig) => {
  return originConfig;
}, (error) => {
  console.log("Error occured on request");
  return Promise.reject(error);
})

//拦截响应
request.interceptors.response.use((res) => {
  return res;
}, (error) => {
  console.log("Error occured on response");
  return Promise.reject(error);
})


export default request;