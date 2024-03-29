import { getFilteredBook } from '../../services/bookService';
import { useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import { usePage } from './PageContext';
import { useEffect } from 'react';
import { AddBookProps } from '../../types/BooksList';

interface FilteredBookData {
  isLoading: boolean;
  filteredBook: AddBookProps[] | null;
}

const useFilteredBook = (): FilteredBookData => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { page, limit } = usePage();

  useEffect(() => {
    searchParams.set('page', page.toString());
    searchParams.set('limit', limit.toString());
    setSearchParams(searchParams);
  }, []);
  let location = useLocation();
  const value = location.search;
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<AddBookProps[]>({
    queryKey: ['get-filtered-book', value, page, limit],

    queryFn: () => getFilteredBook(value),
    // queryFn: () => getFilteredBook(value, page, limit),
    retry: false,

    onSuccess: () => {
      // queryClient.removeQueries(['get-filtered-book']);
      queryClient.removeQueries({ queryKey: ['get-filtered-book'] });
    },
  } as UseQueryOptions<AddBookProps[], Error>);

  // const filteredBook = data || {};
  const filteredBook = data || null;

  return { isLoading, filteredBook };
};

export default useFilteredBook;
