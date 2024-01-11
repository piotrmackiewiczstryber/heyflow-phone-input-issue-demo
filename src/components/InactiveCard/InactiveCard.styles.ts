import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles<string, { isCompleted?: boolean }>(
  (theme) => ({
    container: {
      paddingLeft: (props) => (props.isCompleted ? 0 : '58px'),
    },
    withButton: {
      padding: [32, 40],
    },
    inactiveContentWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&>span': {
        color: theme.colors.text.headline,
        paddingLeft: '24px',
      },
    },
  })
);
