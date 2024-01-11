import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles<
  string,
  { isLast?: boolean; isCompleted?: boolean }
>((theme) => ({
  container: {
    display: 'flex',
    gap: '25px',
    paddingRight: (props) => (props.isCompleted ? 0 : '341px'),
    marginBottom: (props) => (props.isLast ? 0 : '32px'),
  },
  card: {
    padding: 40,
    borderRadius: 32,
    width: '100%',
  },
  disabled: {
    opacity: 0.2,
  },
  active: {
    backgroundColor: theme.colors.background.lightGrey,
    boxShadow:
      '0px 1px 3px 0px rgba(102, 112, 133, 0.30), 0px 4px 8px 3px rgba(102, 112, 133, 0.15)',
  },
  inactive: {
    border: [1, 'solid', theme.colors.neutralGray.medium300],
  },
}));
