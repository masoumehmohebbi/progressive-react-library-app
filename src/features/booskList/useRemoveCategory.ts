import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { removeCategoryApi } from '../../services/categoryService';

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
      toast.error(err?.response?.data?.error);
      console.log(err);
    },
  });

  return { removeCategory, isDeleting };
}
