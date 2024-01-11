import { createStyles } from '@stryberventures/gaia-react.theme';
import blogApplyImage from '@/assets/images/blog-apply-image.jpg';

export default createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.secondary.main500,
    borderRadius: '32px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)',
    marginBottom: '128px',
  },
  cardRight: {
    backgroundImage: `url(${blogApplyImage.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardLeft: {
    padding: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '42px',
  },
  cardLeftText: {
    fontSize: '38px',
    fontWeight: 700,
    lineHeight: '45px',
    color: '#fff',
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    card: {
      display: 'block',
      marginBottom: '80px',
    },
    cardRight: {
      display: 'none',
    },
    cardLeft: {
      padding: '40px',
    },
    cardLeftText: {
      fontSize: '22px',
      lineHeight: '28px',
      textAlign: 'center',
    },
  },
}));
