import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  title: {
    fontSize: '38px',
    fontWeight: 'bold',
    lineHeight: '45px',
    marginBottom: '128px',
    marginTop: '102px',
  },
  blogList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginBottom: '128px',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    title: {
      marginBottom: '40px',
      marginTop: '73px',
    },
    blogList: {
      gap: '64px',
      marginBottom: '80px',
    },
  },
}));
