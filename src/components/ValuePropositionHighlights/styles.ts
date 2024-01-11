import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    paddingBottom: '60px',
    position: 'relative',
  },
  divider: {
    '&:after': {
      content: '""',
      zIndex: 0,
      position: 'absolute',
      width: '100vw',
      height: '100%',
      top: 0,
      left: 'calc((1136px - 100vw)/2)',
      borderBottom: '1px solid #e2e5f1',
    },
  },
  sectionTitle: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 700,
    marginBottom: '52px',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.text.headline,
  },
  element: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '195px',
    height: '100px',
  },
  [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
    divider: {
      '&:after': {
        left: -72,
      },
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    divider: {
      '&:after': {
        left: -16,
      },
    },
    sectionTitle: {
      marginBottom: '10px',
    },
  },
}));
