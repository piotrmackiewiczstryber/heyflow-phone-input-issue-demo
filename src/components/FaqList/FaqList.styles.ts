import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 38,
    lineHeight: 'normal',
    marginBottom: 64,
    color: theme.colors.text.grey900,
  },
  faqListWrapper: {
    display: 'grid',
    gap: theme.spacing[24],
  },
  answer: {
    color: theme.colors.text.secondary,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    title: {
      marginBottom: 32,
      fontSize: 28,
      lineHeight: '34px',
    },
  },
}));
