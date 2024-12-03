// React, NextJS imports
import React, { useEffect } from 'react';

// import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

// External Library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Internal Components imports
import Theme from '../theme/Theme';
import { ThemeProvider as GlobalThemeProvider } from '../contexts/ThemeContext';
import { DataProvider } from '../contexts/DataContext';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/dist/client/router';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Check for the redirect parameter
    const redirect = new URLSearchParams(window.location.search).get(
      'redirect'
    );
    if (redirect) {
      router.replace(redirect); // Navigate to the original path
    }
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <Theme>
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </Theme>
        <ToastContainer />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}
