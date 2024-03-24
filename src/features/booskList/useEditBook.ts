import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { editBookApi } from '../../services/bookService';
import { AxiosError } from 'axios';

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
      let ErrorMsg = 'Failed to remove Category';
      if (err instanceof AxiosError) {
        if (err?.response?.data?.error) {
          ErrorMsg = err.response.data.error;
        }
      }
      toast.error(ErrorMsg);
      // toast.error(err?.response?.data?.error);
    },
  });

  return { isEditing, editBook };
}
