import { createStyles } from '@stryberventures/gaia-react.theme';
import { CardVariant } from '@/components/Cards/Card';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const useStyles = createStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    gap: 40,
    padding: [208, 0, 0, 0],
  },
  blackCard: {
    position: 'relative',
    top: -208,
  },
  card: {
    boxSizing: 'border-box',
    display: 'grid',
    padding: 40,
    gap: 40,
    background: 'linear-gradient(273deg, #2E4ACB 0.74%, #0120AC 99.16%)',
    borderRadius: 32,
    width: '100%',
    maxWidth: 548,
    minHeight: 344,
    justifyItems: 'center',
    color: theme.colors.contrast.white,
    '&>span:first-child': {
      alignSelf: 'end',
    },
  },
  [CardVariant.Primary]: {
    background: 'linear-gradient(273deg, #2E4ACB 0.74%, #0120AC 99.16%)',
  },
  [CardVariant.Black]: {
    background: theme.colors.contrast.black,
  },
  blackCardIconWrapper: {
    display: 'grid',
    justifyItems: 'center',
    gap: theme.spacing[8],
  },
  blackCardIconContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  primaryCard: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    blackCard: {
      top: 0,
    },
    cardsContainer: {
      flexDirection: 'column',
      gap: 22,
      padding: 0,
    },
    card: {
      maxWidth: '100%',
    },
    primaryCard: {
      '&>span:first-child': {
        fontSize: 34,
        lineHeight: '40px',
      },
    },
    blackCardIconContainer: {
      flexDirection: 'column',
      gap: 32,
    },
  },
}));
