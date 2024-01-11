import { SnackbarContent } from '@stryberventures/gaia-react.snackbar';
import { CustomContentProps, useSnackbar } from 'notistack';
import { forwardRef, useCallback } from 'react';

export const Snackbar = forwardRef<HTMLDivElement, CustomContentProps>(
  ({ id, ...rest }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <SnackbarContent ref={ref} {...rest} onClose={handleDismiss} />;
  }
);

Snackbar.displayName = 'Snackbar';
