import http from './httpService';

export function getBooks() {
  return http.get('/book/').then(({ data }) => data.data);
}

export function addBook(data) {
  return http.post('/book/', data);
}
