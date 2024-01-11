import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    backgroundColor: theme.colors.primary.extraLight50,
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '28px',
    backgroundColor: theme.colors.contrast.white,
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '28px',
    boxShadow: '0px 4.400000095367432px 12px -1px #1310220F',
  },
  [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
    root: {
      width: '80px',
      height: '80px',
    },
    innerContainer: {
      width: '56px',
      height: '56px',
      fontSize: '28px',
      lineHeight: '34px',
    },
  },
}));
