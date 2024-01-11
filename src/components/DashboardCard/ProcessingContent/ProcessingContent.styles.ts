import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  statusContainer: {
    marginBottom: '8px',
    display: 'flex',
    gap: '16px',
  },
  status: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    fontSize: '10px',
    lineHeight: '12px',
    color: theme.colors.text.lightGrey,

    '& > div': {
      display: 'flex',
      gap: '4px',
      color: theme.colors.text.darkGrey,
      '& > span': {
        fontWeight: 700,
      },
    },
  },
  title: {
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 700,
    color: theme.colors.text.darkGrey,
  },
  subtitle: {
    fontSize: '14px',
    lineHeight: '20px',
    color: theme.colors.text.lightGrey,
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#e4e7ec',
    margin: '10px 0',
  },
}));
