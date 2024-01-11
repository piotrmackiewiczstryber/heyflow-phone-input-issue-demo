import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '46px',
  },
  link: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22.5px',
  },
  linkText: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.text.secondary,
    gap: '4px',
  },
  active: {
    '&>span': {
      color: theme.colors.primary.main500,
    },
  },
  homeIcon: {
    '&>path': {
      fill: theme.colors.text.secondary,
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      marginTop: '32px',
    },
  },
}));
