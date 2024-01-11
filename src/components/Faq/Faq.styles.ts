import { createStyles } from '@stryberventures/gaia-react.theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '38px',
    fontWeight: 700,
    marginBottom: '32px',
    lineHeight: '45px',
    color: theme.colors.text.headline,
  },
  questionText: {
    color: theme.colors.text.headline,
  },
  desktopFaq: {},
  mobileFaq: { display: 'none' },
  questionBlock: {
    display: 'flex',
    padding: theme.spacing[24],
    gap: 129,
    alignItems: 'center',
    borderRadius: 32,
    '&:nth-child(even )': {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
  },
  answer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing[16],
    alignItems: 'flex-start',
  },
  textBadge: {
    padding: [6, 10],
    borderRadius: 8,
  },
  primary: {
    backgroundColor: theme.colors.primary.light200,
  },
  error: {
    backgroundColor: theme.colors.error.light200,
  },
  answerText: {
    color: theme.colors.text.secondary,
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    title: {
      fontSize: '28px',
      lineHeight: '34px',
    },
    desktopFaq: {
      display: 'none',
    },
    mobileFaq: {
      display: 'grid',
      gap: theme.spacing[16],
    },
  },
}));
