import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  button: {
    '&[class*=button]': {
      fontWeight: 600,
      padding: [theme.spacing[12], theme.spacing[24]],
    },
  },
  round: {
    '&[class*=button]': {
      borderRadius: [theme.spacing[16], '!important'],
    },
  },
  contrastContained: {
    '&[class*=button]': {
      backgroundColor: theme.colors.contrast.white,
      color: theme.colors.contrast.black,
      '&:hover': {
        backgroundColor: `${theme.colors.background.lightGrey}!important`,
      },
      '&:focus': {
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), #EEE',
      },
    },
  },
  contrastOutlined: {
    '&[class*=button]': {
      color: theme.colors.contrast.white,
      borderColor: theme.colors.contrast.white,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: `${theme.colors.contrast.white}!important`,
        color: theme.colors.contrast.black,
      },
      '&:focus': {
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), #EEE',
      },
    },
  },
  ghost: {
    '&[class*=button]': {
      color: theme.colors.text.secondary,
      fontWeight: 400,
      '&:hover': {
        backgroundColor: [theme.colors.neutralGray.light100, '!important'],
      },
      '&:focus': {
        backgroundColor: [theme.colors.neutralGray.light200, '!important'],
      },
    },
  },
  small: {
    '&[class*=button]': {
      padding: [theme.spacing[4], theme.spacing[16]],
    },
  },
  contained: {
    '&[class*=button]': {
      '&:hover': {
        backgroundColor: [theme.colors.primary.dark600, '!important'],
      },
      '&:focus': {
        backgroundColor:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #001FAD!important',
      },
    },
  },
  dark: {
    '&[class*=button]': {
      '&:hover': {
        color: theme.colors.contrast.white,
        backgroundColor: [theme.colors.neutralGray.dark700, '!important'],
        '& svg>path': {
          fill: [theme.colors.contrast.white, '!important'],
        },
      },
      '&:focus': {
        color: theme.colors.contrast.white,
        backgroundColor: [theme.colors.neutralGray.extraDark800, '!important'],
        '& svg>path': {
          fill: [theme.colors.contrast.white, '!important'],
        },
      },
    },
  },
  active: {
    '&[class*=button]': {
      fontWeight: 700,
      color: theme.colors.text.darkGrey,
    },
  },
}));
