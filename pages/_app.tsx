// React, NextJS imports
import React from 'react';

// import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// External Library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Internal Components imports
import '../styles/globals.css';
import Theme from '../theme/Theme';
import { ThemeProvider as GlobalThemeProvider } from '../contexts/ThemeContext';
import { DataProvider } from '../contexts/DataContext';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <Theme>
          <DataProvider>
            <Head>
              <link rel="shortcut icon" href='./static/push.png'/>
              <meta
                name="description"
                content="push protocol analytics dashboard"
              />
              <meta
                name="keywords"
                content="Push,Communication,Notification,Chat"
              />
              <meta name="author" content="Push Protocol" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <Component {...pageProps} />
          </DataProvider>
        </Theme>
        <ToastContainer />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}
