'use client';
import useStyles from './SnackbarProvider.styles';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';
import React from 'react';
import { Snackbar } from '@/components/Snackbar/Snackbar';

interface ISnackbarProvider {
  children: React.ReactNode;
}

const SnackbarProvider: React.FC<ISnackbarProvider> = ({ children }) => {
  const classes = useStyles();

  return (
    <NotistackSnackbarProvider
      Components={{
        default: Snackbar,
        success: Snackbar,
        error: Snackbar,
        info: Snackbar,
        warning: Snackbar,
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      classes={{
        containerRoot: classes.container,
      }}
      autoHideDuration={4000}
    >
      {children}
    </NotistackSnackbarProvider>
  );
};

export default SnackbarProvider;
