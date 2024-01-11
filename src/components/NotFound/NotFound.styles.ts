import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40,
    flex: 1,
    justifyContent: 'center',
  },
  textWrapper: {
    display: 'grid',
    gap: theme.spacing[16],
    color: theme.colors.text.headline,
  },
  supportText: {
    color: theme.colors.text.secondary,
  },
  image: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    image: {
      height: 110,
      width: 238,
    },
  },
}));
