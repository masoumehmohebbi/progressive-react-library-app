import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../services/authService';
import { useToken } from './TokenContext';

export default function useLogout() {
  const { setToken } = useToken();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/', { replace: true });
    },

    onError: () => {
      toast.success('شما از رابوک خارج شدید');
      setToken(null);
    },
  });

  return { isPending, logout };
}
