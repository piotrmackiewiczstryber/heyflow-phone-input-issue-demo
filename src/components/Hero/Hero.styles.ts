import { createStyles } from '@stryberventures/gaia-react.theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
export const useStyles = createStyles((theme) => ({
  header: {
    marginTop: 32,
    position: 'relative',
    paddingTop: 105,
    color: theme.colors.contrast.white,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  headerContent: {
    position: 'relative',
    padding: [theme.spacing[64], 72],
    zIndex: 2,
    backgroundColor: theme.colors.primary.main500,
    display: 'inline-flex',
    flexDirection: 'column',
    borderRadius: 32,
    gap: theme.spacing[32],
    width: '45%',
  },
  title: {
    fontSize: [38, '!important'],
    lineHeight: '56px!important',
  },
  image: {
    borderRadius: 32,
    overflow: 'hidden',
    width: '60%',
    height: 500,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  buttonsContainer: {
    display: 'flex',
    gap: theme.spacing[16],
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    header: {
      paddingTop: 0,
      marginTop: 0,
      paddingBottom: 175,
    },
    headerContent: {
      padding: [40, 0, 150, 0],
      zIndex: 1,
      width: '100%',
      borderRadius: 0,
      '&:after': {
        content: '""',
        position: 'absolute',
        width: 'calc(100% + 32px)',
        height: '100%',
        top: 0,
        left: -16,
        background: theme.colors.primary.main500,
        zIndex: -1,
      },
    },
    image: {
      width: '100%',
      zIndex: 1,
      top: 'calc(100% - 275px)',
      height: 275,
    },
    title: {
      fontSize: [34, '!important'],
      lineHeight: '40px!important',
    },
    buttonsContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));
