import { useMutation } from '@tanstack/react-query';
import { API_URL } from '@/env';
import { useFetch } from '@/services/api/utils';
import { LS } from '@/services/localStorage';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginData = {
  accessToken: string;
};

export const useLoginMutation = () => {
  const router = useRouter();
  const url = `${API_URL}/auth/login`;
  const fetchFn = useFetch<LoginData, LoginPayload>(url, 'POST');
  return useMutation({
    mutationFn: fetchFn,
    onSuccess: (data) => {
      LS.setItem('accessToken', data.accessToken);
      router.replace('/dashboard');
    },
    onError: (e) => {
      enqueueSnackbar(e.message, { variant: 'error' });
    },
  });
};
