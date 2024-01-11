import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    padding: '77px 0',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100vw',
      height: '100%',
      top: 0,
      left: 'calc((1136px - 100vw)/2)',
      background: theme.colors.background.extraLightGrey,
      zIndex: -1,
    },
  },
  mapContainer: {
    display: 'block',
    position: 'relative',
    flexShrink: 1,
    flexGrow: 1,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  marker: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '47%',
    left: '50%',
  },
  infoContainer: {
    display: 'flex',
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '330px',
    paddingLeft: '70px',
    color: theme.colors.text.lightGrey,
  },
  title: {
    fontSize: '38px',
    fontWeight: 700,
    lineHeight: '45px',
    color: theme.colors.text.darkGrey,
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  phone: {
    direction: 'ltr',
    justifyContent: 'end',
  },
  [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
    container: {
      '&:after': {
        left: -72,
      },
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    container: {
      '&:after': {
        left: -16,
      },
    },
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      flexDirection: 'column',
      gap: '24px',
      padding: 0,

      '&:after': {
        display: 'none',
      },
    },
  },
}));
