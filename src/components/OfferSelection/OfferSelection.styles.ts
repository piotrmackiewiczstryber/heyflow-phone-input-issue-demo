import { createStyles } from '@stryberventures/gaia-react.theme';

export const useStyles = createStyles((theme) => ({
  titleWrapper: {
    display: 'grid',
    gap: 16,
    paddingBottom: 26,
    borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
    marginBottom: 26,
  },
  title: {
    color: theme.colors.text.headline,
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
  form: {
    display: 'grid',
    gap: 40,
  },
  variantsWrapper: {
    display: 'flex',
    gap: 24,
  },
  variant: {
    display: 'grid',
    gap: 8,
    backgroundColor: theme.colors.contrast.white,
    borderRadius: 16,
    padding: 24,
  },
  variantTitle: {
    color: theme.colors.text.headline,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '15px',
  },
}));
