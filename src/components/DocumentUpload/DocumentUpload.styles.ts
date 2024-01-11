import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles<string, { error?: boolean }>((theme) => ({
  container: {
    height: 'calc(127px - 64px)',
    padding: '32px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '16px',
    border: ({ error }) =>
      `1px solid ${error ? theme.colors.status.error : 'transparent'}`,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    margin: '4px 2px',
  },
  name: {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.colors.text.darkGrey,
  },
  helper: {
    fontSize: '10px',
    lineHeight: '12px',
    color: theme.colors.text.extraLightGrey,
    padding: '4.5px 0',
  },
  uploadButton: {
    width: '35px',
    height: '35px',
    borderRadius: '8px',
    padding: '0 !important',
    border: 'none !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.grey + ' !important',
  },
  fileNameButton: {
    backgroundColor: 'transparent !important',
    border: 'none !important',
    padding: '0 !important',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16.8px',
    justifyContent: 'start !important',
    color: theme.colors.primary.main500 + ' !important',
    textDecoration: 'underline',
  },
  error: {
    fontSize: '10px',
    lineHeight: '12px',
    color: theme.colors.status.error,
    padding: '6px 0',
  },
  errorFileNameContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
}));
