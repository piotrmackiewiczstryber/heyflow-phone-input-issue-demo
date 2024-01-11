import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  accordionContainer: {
    padding: [theme.spacing[24], theme.spacing[16]],
    backgroundColor: theme.colors.background.extraLightGrey,
    borderRadius: theme.spacing[16],
    display: 'grid',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  openContainer: {
    backgroundColor: theme.colors.background.lightGrey,
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.colors.text.headline,
  },
  contentWrapper: {
    display: 'grid',
    gap: theme.spacing[16],
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  open: {
    marginTop: theme.spacing[16],
    maxHeight: 500,
  },
}));
