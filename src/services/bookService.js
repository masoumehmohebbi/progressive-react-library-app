import http from './httpService';

export function getBooks() {
  return http.get('/book/');
}

export function addBook(data) {
  return http.post('/books//', data);
}
