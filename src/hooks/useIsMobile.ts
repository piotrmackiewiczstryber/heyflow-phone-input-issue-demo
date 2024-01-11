import { theme } from '@/components/ThemeProvider';

export const useIsMobile = () => {
  const screenWidth = window.innerWidth;

  return {
    isMd: screenWidth < theme.breakpoints.md,
    isSm: screenWidth < theme.breakpoints.sm,
    isMobile: screenWidth < 1280,
    screenWidth,
  };
};
