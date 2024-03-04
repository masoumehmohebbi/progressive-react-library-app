import http from './httpService';

export function getBooks() {
  return http.get('/book/');
}
