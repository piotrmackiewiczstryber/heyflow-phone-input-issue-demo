import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  root: {
    backgroundColor: [theme.colors.contrast.white, '!important'],
    borderColor: 'transparent !important',
    border: ['none', '!important'],
    borderRadius: '8px',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4.400000095367432px 12px -1px #1310220F !important',
    cursor: 'pointer',
    padding: '0 !important',
    position: 'absolute',
  },
}));
