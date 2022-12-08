import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_LOCAL_SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
