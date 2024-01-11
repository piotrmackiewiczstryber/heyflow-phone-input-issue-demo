'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
interface IReactQueryProviderProps {
  children?: ReactNode;
}

export const ReactQueryProvider: FC<IReactQueryProviderProps> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
