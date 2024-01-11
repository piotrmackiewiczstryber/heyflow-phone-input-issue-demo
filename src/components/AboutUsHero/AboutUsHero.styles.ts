import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: 32,
    overflow: 'hidden',
    width: 598,
    height: 398,
    position: 'relative',
  },
  heroText: {
    maxWidth: '40%',
  },
  title: {
    fontSize: 38,
    marginBottom: 65,
    lineHeight: 'normal',
    color: theme.colors.text.headline,
  },
  container: {
    position: 'relative',
    display: 'flex',
    gap: 57,
    paddingLeft: 89,
    paddingBottom: 86,
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 300,
      height: 326,
      bottom: 0,
      left: 0,
      background: theme.colors.primary.main500,
      zIndex: -1,
      borderRadius: [32, 32, 32, 0],
    },
  },
  description: {
    color: theme.colors.text.secondary,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      flexDirection: 'column',
      paddingLeft: 32,
      paddingBottom: 38,
      gap: 48,
      '&:after': {
        width: 176,
        height: 161,
      },
    },
    title: {
      fontSize: 28,
      marginBottom: 32,
      lineHeight: '34px',
    },
    heroText: {
      maxWidth: '100%',
    },
    image: {
      width: '100%',
      height: 196,
    },
  },
}));
