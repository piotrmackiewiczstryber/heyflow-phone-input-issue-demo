import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  fullWidth: {
    '&[class*=card]': {
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      '&>span:first-child': {
        alignSelf: 'initial',
        textAlign: 'center',
        width: '100%',
      },
    },
  },
  blackCardIconWrapper: {
    display: 'grid',
    justifyItems: 'center',
    gap: theme.spacing[8],
  },
  blackCardIconContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    fullWidth: {
      flexDirection: 'column',
    },
    blackCardIconContainer: {
      flexDirection: 'column',
      gap: 32,
    },
  },
}));
