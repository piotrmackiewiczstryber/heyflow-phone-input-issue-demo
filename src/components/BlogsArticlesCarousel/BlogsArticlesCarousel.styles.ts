import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles<string, { mobileTitleAlign: 'center' | 'right' }>(
  (theme) => ({
    root: {
      marginBottom: '50px',
    },
    title: {
      width: '100%',
      fontSize: '38px',
      fontWeight: 700,
      marginTop: 0,
      marginBottom: '72px',
      lineHeight: '45px',
      color: theme.colors.text.headline,
      textAlign: 'center',
    },
    itemContainer: {
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing[24],
      width: '100%',
      maxWidth: '305px',
      paddingBottom: theme.spacing[32],
      boxShadow:
        '0px 2px 6.4px -1px rgba(19, 16, 34, 0.03), 0px 4.4px 12px -1px rgba(19, 16, 34, 0.06)',
    },
    itemImage: {
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    },
    itemTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      gap: theme.spacing[24],
      padding: `0 20px`,
    },
    itemTitle: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '28px',
    },
    itemLink: {
      textDecoration: 'none',
      fontSize: '18px',
      lineHeight: '28px',
      color: theme.colors.text.lightGrey,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      title: {
        marginBottom: '43px',
        textAlign: ({ mobileTitleAlign }) => mobileTitleAlign,
      },
    },
  })
);
