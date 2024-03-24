import { EditBookProps } from '../types/BooksList';
import http from './httpService';

type AddBookProps = {
  title: string;
  author: string;
  image_url: string;
  is_favorite: boolean;
  category: string;
  is_read: boolean;
};

type GetFilteredBookProps = {
  page?: number;
  limit?: number;
  category?: string;
  is_read?: boolean;
};

export function getBooks() {
  return http.get('/book/').then(({ data }) => data.data);
}

export function getOneBook(id: string | undefined) {
  return http.get(`/book/${id}/`).then(({ data }) => data.data);
}

export function addBook(data: AddBookProps) {
  return http.post('/book/', data);
}

export function removeBookApi(id: number) {
  return http.delete(`/book/${id}/`).then(({ data }) => data.data);
}

export function editBookApi({ id, newBook }: EditBookProps) {
  return http.patch(`/book/${id}/`, newBook);
}

export function getFilteredBook(data: GetFilteredBookProps) {
  return http.get(`/book/${data}`).then(({ data }) => data.data);
}
