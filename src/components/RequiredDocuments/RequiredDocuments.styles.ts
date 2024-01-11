import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },
  button: {
    marginTop: '24px',
  },
}));
