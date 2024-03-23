import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { editBookApi } from '../../services/bookService';

export default function useEditBook() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editBook } = useMutation({
    mutationFn: editBookApi,
    onSuccess: () => {
      toast.success('کتاب شما با موفقیت تغییر یافت');

      queryClient.invalidateQueries({
        queryKey: ['get-filtered-book'],
      });
    },

    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.error);
    },
  });

  return { isEditing, editBook };
}
