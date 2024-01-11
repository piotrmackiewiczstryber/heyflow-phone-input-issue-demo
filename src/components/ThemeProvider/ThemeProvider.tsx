'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import { theme } from './theme';

interface IThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [GaiaThemeProvider, setGaiaThemeProvider] = useState<FC | null>(null);

  useEffect(() => {
    (async () => {
      const { ThemeProvider } = await import(
        '@stryberventures/gaia-react.theme'
      );
      setGaiaThemeProvider(ThemeProvider as never);
    })();
  }, []);

  return GaiaThemeProvider ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <GaiaThemeProvider theme={theme}>{children}</GaiaThemeProvider>
  ) : null;
};
