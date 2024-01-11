import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-48px',
  },
  sectionTitle: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 700,
    marginBottom: '52px',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px',
  },
  elementContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    borderRight: `1px solid ${theme.colors.primary.light200}`,
    paddingRight: '49px',
    paddingBottom: '41px',

    ['&:last-child']: {
      borderRight: 'none',
    },
  },
  numberContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateX(50%)',
    zIndex: 1,
  },
  stepTitle: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 700,
    marginBottom: '24px',
    color: theme.colors.text.headline,
  },
  stepDescription: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    color: theme.colors.text.lightGrey,
    paddingLeft: 0,
  },
  [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
    root: {
      marginTop: 0,
    },
    sectionTitle: {
      fontSize: '38px',
      lineHeight: '45px',
      fontWeight: 700,
      marginBottom: '112px',
    },
    stepsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 4fr)',
      gridTemplateRows: 'repeat(2, 2fr)',
    },
    elementContainer: {
      flex: 1,
      paddingLeft: '104px',
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: '94px',
      borderRight: 'none',
      borderTop: `1px solid ${theme.colors.primary.light200}`,

      ['&:nth-child(4)']: {
        borderTop: 'none',
        paddingLeft: 0,
      },
    },
    stepDescription: {
      paddingLeft: '65px',

      ['&:last-child']: {
        paddingLeft: 0,
      },
    },
    numberContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translateY(-50%)',
    },
  },
}));
