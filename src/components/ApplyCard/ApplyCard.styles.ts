import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    padding: 40,
    backgroundColor: theme.colors.secondary.main500,
    display: 'flex',
    borderRadius: 32,
    gap: 80,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.contrast.white,
    minHeight: 240,
  },
  textContainer: {
    display: 'grid',
    gap: theme.spacing[24],
  },
  button: {
    width: 343,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      flexDirection: 'column',
      gap: 32,
      minHeight: 'unset',
    },
    textContainer: {
      '&>span': {
        textAlign: 'center',
      },
    },
    button: {
      width: '100%',
    },
  },
}));
