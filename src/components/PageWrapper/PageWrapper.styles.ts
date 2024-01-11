import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: 1136,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
  },
  [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
    container: {
      margin: '0 72px',
      maxWidth: 'initial',
      width: 'auto',
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    container: {
      margin: '0 16px',
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      minHeight: 'calc(100dvh - 92px)',
    },
  },
}));
