import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const BASE_URL = 'https://library-api-t70g.onrender.com';

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err),
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        // const { data } = await axios.post(`${BASE_URL}/token/refresh/`, {
        //   withCredentials: true,
        // });
        const { data } = await axios.post(`${BASE_URL}/token/refresh/`, {
          refresh_token: cookies.get('refresh_token'),
        });
        cookies.set('access_token', data.data.access_token);
        if (data.data.access_token) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
