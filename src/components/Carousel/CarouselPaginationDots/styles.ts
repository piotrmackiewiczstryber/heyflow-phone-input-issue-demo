import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles(() => ({
  root: {
    position: 'relative',
    margin: 0,
    top: '30px',
    padding: 0,
  },
  element: {
    listStyleType: 'none',
    display: 'inline-block',
  },
  button: {
    border: 0,
    background: 'transparent',
    color: 'black',
    cursor: 'pointer',
    padding: '8px',
    outline: 0,
    opacity: 0.5,
  },
  activeButton: {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: '8px',
    outline: 0,
    color: 'black',
    opacity: 1,
  },
}));

export const createDotStyles = createStyles<string, { active: boolean }>(
  (theme) => ({
    root: {
      display: 'block',
      width: ({ active }) => (active ? '24px' : '5px'),
      transition: 'width 0.5s ease-out',
      height: '5px',
      borderRadius: '3px',
      backgroundColor: ({ active }) =>
        active ? theme.colors.primary.main500 : theme.colors.primary.medium400,
    },
  })
);
