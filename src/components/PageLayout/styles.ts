import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  root: {
    margin: '0 auto',
  },
  [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
    root: {
      maxWidth: '1136px',
    },
  },
}));
