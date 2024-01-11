import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    gap: '20px',
    alignItems: 'start',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '34px',
    color: theme.colors.text.darkGrey,
  },
  description: {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.colors.text.lightGrey,
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    lineClamp: 4,
    '-webkit-box-orient': 'vertical',
  },
  date: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#98a2b3',
  },
  image: {
    borderRadius: 32,
    overflow: 'hidden',
    width: '230%',
    height: 380,
    position: 'relative',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    container: {
      flexDirection: 'column',
    },
    description: {
      display: 'block',
    },
    image: {
      width: '100%',
      height: 328,
    },
  },
}));
