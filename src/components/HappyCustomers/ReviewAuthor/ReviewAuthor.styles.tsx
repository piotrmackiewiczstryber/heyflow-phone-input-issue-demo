import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  reviewAuthor: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  googleLink: {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff2fc',
    borderRadius: '8px',
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  authorAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
  },
  authorNameAndLocation: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  location: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    authorInfo: {
      marginRight: '18px',
    },
  },
}));
