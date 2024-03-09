import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/categoryService';

const useCategories = () => {
  return useQuery({
    queryKey: ['get-all-category'],
    queryFn: getCategories,
    retry: false,
  });
};

export default useCategories;
