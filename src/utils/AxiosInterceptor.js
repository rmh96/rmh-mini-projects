import axios from "axios";

export const myAxios = axios.create();
myAxios.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer djfhsdkjf",
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
