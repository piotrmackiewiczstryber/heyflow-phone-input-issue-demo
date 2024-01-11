import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles(() => ({
  container: {
    width: '90vw',
    maxWidth: 400,
    '& > div': {
      width: '100%',
    },
  },
}));
