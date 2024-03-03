import axios from 'axios';

const BASE_URL = 'https://library-api-t70g.onrender.com';

const app = axios.create({
  baseURL: BASE_URL,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
