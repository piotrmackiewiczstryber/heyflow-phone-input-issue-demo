'use client';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const authorized = useAuth();

  useEffect(() => {
    if (!authorized) {
      router.replace('/login');
    }
  }, [authorized, router]);

  return authorized ? children : null;
};
