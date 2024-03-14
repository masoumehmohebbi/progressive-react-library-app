import { getFilteredBook } from '../../services/bookService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { useFiltered } from './FilteredBookContext';
import { useState } from 'react';
import useFetchBooks from './useFetchBooks';
import { useLocation } from 'react-router-dom';

const useFilteredBook = () => {
  let location = useLocation();
  const value = location.search;
  console.log(value);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const { data: allBooks } = useFetchBooks();

  // const { filteredBooks: value } = useFiltered();

  const queryClient = useQueryClient();
  // const value = searchParams.get('is_read');

  const { data, isLoading } = useQuery({
    queryKey: ['get-filtered-book', value],
    queryFn: () => getFilteredBook(value),

    retry: false,

    onSuccess: () => {
      queryClient.removeQueries(['get-filtered-book']);
    },
  });
  const filteredBook = data || {};

  return { isLoading, filteredBook };
};

export default useFilteredBook;
