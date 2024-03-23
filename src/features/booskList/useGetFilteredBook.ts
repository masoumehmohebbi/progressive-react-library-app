import { getFilteredBook } from '../../services/bookService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import { usePage } from './PageContext';
import { useEffect } from 'react';

const useFilteredBook = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { page, limit } = usePage();

  useEffect(() => {
    searchParams.set('page', page);
    searchParams.set('limit', limit);
    setSearchParams(searchParams);
  }, []);
  let location = useLocation();
  const value = location.search;
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['get-filtered-book', value, page, limit],
    queryFn: () => getFilteredBook(value, page, limit),
    retry: false,

    onSuccess: () => {
      queryClient.removeQueries(['get-filtered-book']);
    },
  });

  const filteredBook = data || {};

  return { isLoading, filteredBook };
};

export default useFilteredBook;
