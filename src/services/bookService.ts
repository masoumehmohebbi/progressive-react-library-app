import http from './httpService';

// export interface AddBookProps {
//   title: string;
//   author: string;
//   image_url: string;
//   is_favorite: boolean;
//   category_name: string;
//   is_read: boolean;
// }

// interface GetFilteredBookProps {
//   page?: number | string;
//   limit?: number | string;
//   category?: string;
//   is_read?: boolean;
// }

export function getBooks() {
  return http.get('/book/').then(({ data }) => data.data);
}

export function getOneBook(id: string | undefined) {
  return http.get(`/book/${id}/`).then(({ data }) => data.data);
}

export function addBook(data: any) {
  // export function addBook(data: AddBookProps) {
  return http.post('/book/', data);
}

export function removeBookApi(id: number) {
  return http.delete(`/book/${id}/`).then(({ data }) => data.data);
}

export function editBookApi({ id, newBook }: any) {
  // export function editBookApi({ id, newBook }: EditBookProps) {
  return http.patch(`/book/${id}/`, newBook);
}

export function getFilteredBook(data1: string) {
  return http.get(`/book/${data1}`).then(({ data }) => data.data);
}
