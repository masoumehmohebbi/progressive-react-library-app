import http from './httpService';

export function createCategory(data) {
  return http.post('/category/', data);
}

export function getCategories() {
  return http.get('/category/');
}
