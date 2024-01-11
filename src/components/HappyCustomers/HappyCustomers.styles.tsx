import { createStyles } from '@stryberventures/gaia-react.theme';

export const useCommonStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    borderRadius: '32px',
    boxShadow: '0px 4.400000095367432px 12px -1px #1310220F',
  },
  quoteIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    backgroundColor: theme.colors.primary.main500,
    borderRadius: '8px',
    boxShadow: '0px 8px 18px -8px #6366F1E5',
  },
}));

export const useDesktopStyles = createStyles((theme) => ({
  titleContainer: {
    width: '392px',
    backgroundColor: theme.colors.primary.main500,
    borderRadius: '0 32px 32px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '40px',
    color: '#fff',
    margin: '0 58px',
  },
  reviewsContainer: {
    position: 'relative',
    padding: '48px 0',
    minWidth: 0,
  },
  reviewContainer: {
    display: 'flex',
    alignItems: 'end',
    flexDirection: 'column',
    padding: '0 48px',
    gap: '32px',
  },
  reviewContent: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
    paddingBottom: '32px',
  },
}));

export const useMobileStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: '22px',
    margin: '0 45px 0 45px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '34px',
    marginBottom: '60px',
  },
  reviewContainer: {
    padding: '48px 16px 0 16px',
    borderRadius: '24px',
    boxShadow: '0px 4.400000095367432px 12px -1px #1310220F',
    marginBottom: '22px',
  },
  quoteIcon: {
    top: 0,
    right: '17px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    backgroundColor: theme.colors.primary.main500,
    borderRadius: '16px',
    boxShadow: '0px 8px 18px -8px #6366F1E5',
  },
  reviewContent: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
  },
  starsContainer: {
    display: 'flex',
    justifyContent: 'end',
    gap: '4px',
    paddingTop: '17px',
    paddingBottom: '22px',
  },
}));
