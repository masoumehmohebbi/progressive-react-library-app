import { getFilteredBook } from '../../services/bookService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFiltered } from './FilteredBookContext';
const useFilteredBook = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const { filteredBooks: value } = useFiltered();

  const queryClient = useQueryClient();
  // const value = searchParams.get('is_read');

  const { data, isLoading } = useQuery({
    queryKey: ['get-filtered-book', value],
    queryFn: () => getFilteredBook('?is_read=' + value),

    retry: false,

    onSuccess: () => {
      queryClient.removeQueries(['get-filtered-book']);
    },
  });
  const filteredBook = data || {};

  return { isLoading, filteredBook };
};

export default useFilteredBook;
