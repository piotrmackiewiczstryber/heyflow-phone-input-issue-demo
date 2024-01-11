import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  container: {
    width: 352,
    display: 'grid',
    gap: 32,
  },
  photoPlaceholder: {
    width: 352,
    height: 287,
    borderRadius: 16,
    backgroundColor: '#C4C4C4',
  },
  content: {
    display: 'flex',
    padding: [0, 24],
    justifyContent: 'space-between',
  },
  name: {
    color: theme.colors.text.headline,
  },
  position: {
    color: theme.colors.text.secondary,
  },
  textWrapper: {
    display: 'grid',
    gap: 4,
  },
  icon: {
    '& rect': {
      fill: theme.colors.primary.main500,
    },
  },
}));
