import http from './httpService';

export function createCategory(data: { name: string }) {
  return http.post('/category/', data);
}

export function getCategories() {
  return http.get('/category/');
}

export function removeCategoryApi(id: number) {
  return http.delete(`/category/${id}/`).then(({ data }) => data.data);
}
