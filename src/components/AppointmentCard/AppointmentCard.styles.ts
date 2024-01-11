import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  container: {
    padding: 40,
    display: 'grid',
    gap: 32,
    color: theme.colors.contrast.white,
    borderRadius: 32,
    background: 'linear-gradient(180deg, #2E4ACB 0%, #172A7F 141.76%)',
    marginBottom: 124,
  },
  profile: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  },
  profileText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  content: {
    display: 'grid',
    gap: 16,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      padding: 24,
    },
  },
}));
