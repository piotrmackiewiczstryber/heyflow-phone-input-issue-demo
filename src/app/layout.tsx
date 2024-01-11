import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { TopBar } from '@/components/TopBar/Topbar';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { Footer } from '@/components/Footer/Footer';
import SnackbarProvider from '@/components/SnackbarProvider/SnackbarProvider';
import Script from 'next/script';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alnilam Landing Page',
  description: 'Alnilam Landing Page Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ar' dir='rtl'>
      <head>
        <Script src='https://static.heyflow.com/widget/latest/webview.js' />
      </head>
      <body className={rubik.className}>
        <ThemeProvider>
          <ReactQueryProvider>
            <SnackbarProvider>
              <PageWrapper>
                <TopBar />
                {children}
                <Footer />
              </PageWrapper>
            </SnackbarProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
