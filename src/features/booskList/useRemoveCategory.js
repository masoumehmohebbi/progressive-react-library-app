import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { removeCategoryApi } from '../../services/categoryService';

export default function useRemoveCategory() {
  const queryClient = useQueryClient();

  const { mutate: removeCategory, isPending: isDeleting } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ['get-all-category'],
      });
    },
    // toast.error(err?.response?.data?.message)
    onError: (err) => console.log(err),
  });

  return { removeCategory, isDeleting };
}
