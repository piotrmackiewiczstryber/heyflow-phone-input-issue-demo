import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    alignItems: 'flex-start',
    width: '100%',
  },
  faqProfile: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  },
  faqProfileText: {
    color: theme.colors.text.headline,
    display: 'grid',
    gap: 4,
  },
  contactDescription: {
    color: theme.colors.text.secondary,
  },
  button: {},
  [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
    container: {
      padding: [32, 16],
      backgroundColor: theme.colors.background.lightGrey,
      width: 'auto',
      borderRadius: 32,
    },
    button: { width: '100%' },
    faqProfile: {
      width: '100%',
      justifyContent: 'center',
    },
  },
}));
