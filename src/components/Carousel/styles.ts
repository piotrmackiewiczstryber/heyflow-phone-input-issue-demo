import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles(() => ({
  root: {
    direction: 'ltr',
    zIndex: 1,
    position: 'relative',
  },
  frame: {
    paddingBottom: '12px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
}));
