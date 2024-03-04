import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/bookService';

const useFetchBooks = () => {
  return useQuery({
    queryKey: ['get-all-books'],
    queryFn: getBooks,
    retry: false,
  });
};

export default useFetchBooks;
