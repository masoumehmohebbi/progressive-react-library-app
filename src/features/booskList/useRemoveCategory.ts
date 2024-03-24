import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { removeCategoryApi } from '../../services/categoryService';
import { AxiosError } from 'axios';

export default function useRemoveCategory() {
  const queryClient = useQueryClient();

  const { mutate: removeCategory, isPending: isDeleting } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: () => {
      //   toast.success(data.message);
      toast.success(' یک دسته بندی جدید با موفقیت حذف شد');

      queryClient.invalidateQueries({
        queryKey: ['get-all-category'],
      });
    },
    onError: (err) => {
      let ErrorMsg = 'Failed to remove Category';
      if (err instanceof AxiosError) {
        if (err?.response?.data?.error) {
          ErrorMsg = err.response.data.error;
        }
      }
      toast.error(ErrorMsg);
    },
  });

  return { removeCategory, isDeleting };
}
