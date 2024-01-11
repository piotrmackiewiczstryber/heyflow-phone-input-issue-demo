import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
  },
  date: {
    fontSize: '18px',
    lineHeight: '28px',
    color: theme.colors.text.lightGrey,
  },
  title: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '56px',
  },
  image: {
    position: 'relative',
    borderRadius: '32px',
    width: '100%',
    height: '555px',
    overflow: 'hidden',
  },
  contentSection: {
    padding: '0 15%',
  },
  paragraphTitle: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '40px',
    marginTop: '48px',
    marginBottom: '64px',
    color: theme.colors.text.darkGrey,
  },
  paragraphContent: {
    fontSize: '18px',
    lineHeight: '28px',
    color: theme.colors.text.lightGrey,
    marginBottom: '32px',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    image: {
      height: '400px',
      marginBottom: '-40px',
    },
    contentSection: {
      padding: '0 7%',
    },
    paragraphTitle: {
      marginTop: '40px',
      marginBottom: '40px',
    },
  },
  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    container: {
      gap: '40px',
    },
    contentSection: {
      padding: 0,
    },
    titleSection: {
      gap: '24px',
      alignItems: 'start',
    },
    image: {
      height: '249px',
    },
  },
}));
