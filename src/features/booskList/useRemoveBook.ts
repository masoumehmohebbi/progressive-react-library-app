import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { removeBookApi } from '../../services/bookService';
import { useNavigate } from 'react-router-dom';

export default function useRemoveBook() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: removeBook, isPending: isDeleting } = useMutation({
    mutationFn: removeBookApi,
    onSuccess: () => {
      toast.success('کتاب شما با موفقیت حذف شد');

      queryClient.invalidateQueries({
        queryKey: ['get-all-books'],
      });
      navigate(-1);
    },

    onError: (err) => toast.error(err?.response?.data?.error),
  });

  return { removeBook, isDeleting };
}
