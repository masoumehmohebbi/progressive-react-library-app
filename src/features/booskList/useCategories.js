import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/categoryService';

const useCategories = () => {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['get-all-category'],
    queryFn: getCategories,
    retry: false,
  });
};

export default useCategories;
