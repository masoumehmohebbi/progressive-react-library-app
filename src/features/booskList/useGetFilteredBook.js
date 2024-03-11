import { getFilteredBook } from '../../services/bookService';
import { useQuery } from '@tanstack/react-query';

const useFilteredBook = ({ key, value }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-filtered-book'],
    queryFn: () => getFilteredBook(key, '=', value),
    retry: false,
  });
  const filteredBook = data || {};

  return { isLoading, filteredBook };
};

export default useFilteredBook;
