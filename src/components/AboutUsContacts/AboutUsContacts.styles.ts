import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 38,
    lineHeight: 'normal',
    marginBottom: 64,
  },
  contactsWrapper: {
    display: 'grid',
    gap: 40,
    gridTemplateColumns: 'repeat(auto-fill, minmax(352px, 1fr))',
    justifyItems: 'center',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    title: {
      fontSize: 28,
      lineHeight: '34px',
    },
  },
}));
