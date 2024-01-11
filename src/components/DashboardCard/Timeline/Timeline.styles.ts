import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles<
  string,
  {
    variant: 'active' | 'inactive' | 'disabled';
    isFirst?: boolean;
    isLast?: boolean;
  }
>((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '23px',
    position: 'relative',

    '&:after': {
      content: ({ isLast }) => (isLast ? '' : '""'),
      width: '4px',
      height: '32px',
      position: 'absolute',
      bottom: '-32px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: ({ variant }) => {
        switch (variant) {
          case 'inactive':
            return theme.colors.primary.main500;
          case 'active':
          case 'disabled':
            return theme.colors.gray.neutral;
        }
      },
    },
  },
  line: {
    width: '4px',
    flexGrow: '1',
  },
  topLine: {
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    backgroundColor: ({ variant, isFirst }) => {
      if (isFirst) {
        return 'transparent';
      }
      switch (variant) {
        case 'active':
        case 'inactive':
          return theme.colors.primary.main500;
        case 'disabled':
          return theme.colors.gray.neutral;
      }
    },
  },
  bottomLine: {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    backgroundColor: ({ variant, isLast }) => {
      if (isLast) {
        return 'transparent';
      }
      switch (variant) {
        case 'active':
          return theme.colors.gray.neutral;
        case 'inactive':
          return theme.colors.primary.main500;
        case 'disabled':
          return theme.colors.gray.neutral;
      }
    },
  },
  iconContainer: {
    position: 'relative',
  },
  managerCardContainer: {
    position: 'absolute',
    left: '72px',
    top: '-50px',
    zIndex: 1,
  },
  icon: {
    margin: '8px 0',
  },
  disabledIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '11px',
    backgroundColor: theme.colors.gray.neutral,
  },
}));
