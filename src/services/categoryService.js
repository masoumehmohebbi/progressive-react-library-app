import http from './httpService';

export function createCategory(data) {
  return http.post('/category/', data);
}

export function getCategories() {
  return http.get('/category/');
}

export function removeCategoryApi(id) {
  return http.delete(`/category/${id}/`).then(({ data }) => data.data);
}
