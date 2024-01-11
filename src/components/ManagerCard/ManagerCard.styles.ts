import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    alignItems: 'flex-start',
    width: 294,
    padding: 24,
    backgroundColor: theme.colors.neutralGray.extraDark900,
    color: theme.colors.contrast.white,
    boxSizing: 'border-box',
    borderRadius: 32,
    position: 'relative',

    '&:before': {
      content: '""',
      left: '-22px',
      top: '35px',
      position: 'absolute',
      width: '0px',
      height: '0px',
      borderStyle: 'solid',
      borderWidth: '36px 36px 36px 0',
      borderColor: `transparent ${theme.colors.text.darkGrey} transparent transparent`,
      //  transform: rotate(0deg);
    },
  },
  profile: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  },
  profileText: {
    display: 'grid',
    gap: 4,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
}));
