import { createStyles } from '@stryberventures/gaia-react.theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const useStyles = createStyles((theme) => ({
  footer: {
    position: 'relative',
    padding: [theme.spacing[40], 0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:after': {
      content: '""',
      width: '100vw',
      height: 1,
      backgroundColor: theme.colors.gray.medium300,
      position: 'absolute',
      top: 0,
      left: 'calc((1136px - 100vw)/2)',
    },
  },
  footerText: {
    color: theme.colors.text.secondary,
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[24],
  },
  [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
    footer: {
      '&:after': {
        left: -72,
      },
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    footer: {
      '&:after': {
        left: -16,
      },
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    footer: {
      flexDirection: 'column',
      padding: [35, 0],
      alignItems: 'flex-start',
      gap: 25,
    },
  },
}));
