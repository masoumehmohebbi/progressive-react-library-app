import { getOneBook } from '../../services/bookService';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const useBook = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['get-one-book', id],
    queryFn: () => getOneBook(id),
    retry: false,
  });
  const book = data || {};

  return { isLoading, book };
};

export default useBook;
