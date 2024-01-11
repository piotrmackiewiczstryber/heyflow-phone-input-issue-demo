import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  badgesContainer: {
    gap: '8px',
    display: 'flex',
    marginBottom: '-2px',
  },
  badge: {
    padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
    backgroundColor: '#f2f4f7',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14px',
    borderRadius: '4px',
    color: '#33354d',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    badge: {
      color: theme.colors.text.lightGrey,
    },
  },
}));
