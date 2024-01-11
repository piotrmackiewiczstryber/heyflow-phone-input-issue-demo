import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  title: {
    fontSize: '38px',
    fontWeight: 700,
    marginBottom: '32px',
    lineHeight: '45px',
    color: theme.colors.text.headline,
  },
  innerContainer: {
    display: 'flex',
    width: '100%',
    gap: '100px',
  },
  description: {
    fontSize: '16px',
    color: theme.colors.text.lightGrey,
  },
  image: {
    display: 'flex',
    width: '40%',
    position: 'relative',
    alignItems: 'end',
  },
  featuresContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)',
    gridTemplateRows: 'repeat(2, 2fr)',
    gap: '64px 40px',
    marginTop: '89px',
  },
  featureContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing[16],
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    backgroundColor: theme.colors.primary.main500,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: 700,
    color: theme.colors.text.grey900,
  },
  featureDescription: {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.colors.text.lightGrey,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    title: {
      fontSize: '28px',
      lineHeight: '34px',
    },
    featuresContainer: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'repeat(4, 4fr)',
      gap: '32px 0',
      marginTop: '32px',
    },
  },
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    image: {
      display: 'none',
    },
  },
}));
