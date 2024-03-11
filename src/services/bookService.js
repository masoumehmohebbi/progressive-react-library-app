import http from './httpService';

export function getBooks() {
  return http.get('/book/').then(({ data }) => data.data);
}

export function getOneBook(id) {
  return http.get(`/book/${id}/`).then(({ data }) => data.data);
}

export function addBook(data) {
  return http.post('/book/', data);
}

export function removeBookApi(id) {
  return http.delete(`/book/${id}/`).then(({ data }) => data.data);
}
