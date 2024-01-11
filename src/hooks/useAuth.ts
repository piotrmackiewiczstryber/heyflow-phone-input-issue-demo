'use client';
import { LS } from '@/services/localStorage';

//TODO: move to user context when ready

export const useAuth = () => {
  return !!LS.getItem('accessToken');
};
