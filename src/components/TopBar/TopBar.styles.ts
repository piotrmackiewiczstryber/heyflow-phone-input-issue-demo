import { createStyles } from '@stryberventures/gaia-react.theme';

const MOBILE_TOPBAR_HEIGHT = 92;

export const useStyles = createStyles<string, { dashboard?: boolean }>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  (theme) => ({
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: [42, 0],
      alignItems: 'center',
    },
    navigationItems: {
      display: 'flex',
      gap: theme.spacing[16],
      alignItems: 'center',
      flexDirection: 'row-reverse',
    },
    navigationActions: {
      display: 'flex',
      gap: theme.spacing[16],
      flexDirection: 'row-reverse',
    },
    toggleButton: {
      display: 'none',
    },
    mobileMenu: {
      display: 'none',
    },
    mobileOpen: {},
    userInfoLabel: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    userDateOfBirth: {
      fontSize: '12px',
      lineHeight: '14px',
      color: theme.colors.text.lightGrey,
    },
    userName: {
      fontSize: '18px',
      lineHeight: '28px',
      color: theme.colors.text.darkGrey,
    },
    notificationsButton: {
      position: 'relative',
    },
    notificationsLabel: {
      position: 'absolute',
      top: '13px',
      right: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '13px',
      height: '13px',
      backgroundColor: theme.colors.status.error,
      borderRadius: '40px',
      fontSize: '10px',
      lineHeight: '12px',
      color: 'white',
      boxShadow: '0px 0px 0px 1px rgba(255, 255, 255, 1)',
    },
    userProfileButton: {
      position: 'relative',
    },
    userProfileMenu: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      top: '55px',
      left: 0,
      backgroundColor: theme.colors.text.darkGrey,
      padding: '12px',
      borderRadius: '16px',
      zIndex: 1,
    },
    userProfileMenuButton: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 400,
      color: 'white !important',
      whiteSpace: 'nowrap',

      '&:hover': {
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
      },
    },
    userProfileMenuIcon: {
      '& > path': {
        fill: '#fff',
      },
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      navigation: {
        height: MOBILE_TOPBAR_HEIGHT,
        boxSizing: 'border-box',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 200,
        width: '100%',
        padding: [theme.spacing[24], theme.spacing[16]],
        backgroundColor: theme.colors.contrast.white,
      },
      userInfoLabel: {
        display: 'none',
      },
      mobileMenu: {
        display: 'flex',
        flexDirection: 'column',
        padding: [40, 16],
        gap: 40,
        alignItems: 'flex-start',
        position: 'fixed',
        transform: 'translateX(-100%)',
        top: MOBILE_TOPBAR_HEIGHT,
        backgroundColor: theme.colors.contrast.white,
        height: `calc(100% - ${MOBILE_TOPBAR_HEIGHT}px)`,
        width: '100%',
        zIndex: 100,
        transition: 'transform 0.3s ease-in-out',
        boxSizing: 'border-box',
      },
      navigationItems: {
        display: (props) => (props?.dashboard ? 'flex' : 'none'),
      },
      mobileOpen: {
        transform: 'translateX(16px)',
      },
      toggleButton: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
      },
    },
  })
);
