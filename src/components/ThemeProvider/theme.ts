export const theme = {
  colors: {
    primary: {
      dark600: '#001FAD',
      main500: '#2E4ACB',
      medium400: '#5D69FF',
      medium300: '#949CFF',
      light200: '#A7B7FF',
      light100: '#CAD4FF',
      extraLight50: '#EDF1FF',
    },
    secondary: {
      dark600: '#003F1F',
      main500: '#118C4D',
      medium400: '#1CB265',
      medium300: '#5DC18E',
      light200: '#90CBAC',
      light100: '#B1CCBE',
      extraLight50: '#E0ECE5',
    },
    status: {
      error: '#de350b',
    },
    background: {
      grey: '#f2f4f7',
      extraLightGrey: '#f9fafb',
      lightGrey: '#EEE',
    },
    text: {
      grey900: '#0B0F19',
      darkGrey: '#101828',
      lightGrey: '#475467',
      extraLightGrey: '#98a2b3',
    },
    gray: {
      medium300: '#E2E5F1',
      neutral: '#E4E7EC',
    },
  },
  breakpoints: {
    xxl: 1920,
    xl: 1280,
    lg: 1024,
    md: 767,
    sm: 480,
  },
  font: '',
  text: {
    h4: {
      fontSize: 22,
      lineHeight: '28px',
      letterSpacing: -0.44,
    },
    h3: {
      fontSize: 28,
      lineHeight: '34px',
      letterSpacing: -0.56,
    },
    h2: {
      fontSize: 32,
      lineHeight: '40px',
      letterSpacing: -0.76,
    },
    h1: {
      fontSize: 34,
      lineHeight: '40px',
      letterSpacing: -0.68,
    },
  },
};

// We take type from theme object:
type ProjectThemeType = typeof theme;

// And put this type to global theme interface:
// (It is needed for getting types automatically in `useTheme` and `createStyles`)
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace DesignSystem {
    interface IProjectTheme extends ProjectThemeType {}
  }
}

export default theme;
