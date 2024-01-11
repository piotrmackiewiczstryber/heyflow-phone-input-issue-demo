import { createStyles } from '@stryberventures/gaia-react.theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const useStyles = createStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  formWrapper: {
    padding: [72, 0],
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
  link: {
    color: theme.colors.primary.main500,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    backgroundColor: theme.colors.background.extraLightGrey,
    padding: [48, 85],
    borderRadius: 32,
    width: '40%',
    position: 'relative',
    zIndex: 2,
  },
  formTitleWrapper: {
    display: 'grid',
    gap: 16,
  },
  title: {
    color: theme.colors.text.headline,
    margin: 0,
    fontSize: 28,
    lineHeight: '34px',
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
  input: {
    '& [class*="inputContainer"]': {
      borderRadius: 16,
    },
  },
  image: {
    borderRadius: 32,
    overflow: 'hidden',
    width: '50%',
    height: 664,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    image: {
      display: 'none',
    },
    form: {
      width: '100%',
      padding: [48, 0],
      backgroundColor: 'transparent',
    },
    formTitleWrapper: {
      textAlign: 'center',
      justifyItems: 'center',
    },
  },
}));
