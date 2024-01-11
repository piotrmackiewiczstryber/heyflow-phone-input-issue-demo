import { createStyles } from '@stryberventures/gaia-react.theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 48,
    marginBottom: 91,
  },
  container: {
    color: theme.colors.text.headline,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.colors.background.lightGrey,
    padding: [95, 45],
    borderRadius: 32,
  },
  input: {
    '& [class*="inputContainer"]': {
      borderRadius: 16,
    },
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    width: '100%',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formWrapper: {
    display: 'flex',
    gap: 50,
    width: '100%',
    alignItems: 'center',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  resultsContainer: {
    padding: 48,
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    width: '100%',
    maxWidth: 450,
    boxSizing: 'border-box',
  },
  resultWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginTop: 50,
    width: 347,
  },
  supportText: {
    color: theme.colors.text.secondary,
    marginTop: 19,
  },
  mobileActionsWrapper: {
    display: 'none',
  },
  outlinedButton: {
    '&[class*="button"]': {
      backgroundColor: 'transparent',
    },
  },
  mobileHidden: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    mobileHidden: {
      display: 'none',
    },
    title: {
      fontSize: 28,
      lineHeight: '34px',
      marginBottom: 32,
    },
    container: {
      padding: [42, 0],
      alignItems: 'flex-start',
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        width: '100vw',
        height: '100%',
        backgroundColor: theme.colors.background.lightGrey,
        left: -16,
        top: 0,
        zIndex: -1,
      },
    },
    supportText: {
      display: 'none',
    },
    form: {
      alignItems: 'flex-start',
    },
    button: {
      display: ['none', '!important'],
    },
    mobileActionsWrapper: {
      display: 'flex',
      gap: 16,
    },
    resultsContainer: {
      maxWidth: 'initial',
      padding: 0,
    },
  },
}));
