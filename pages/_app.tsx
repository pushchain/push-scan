import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from 'theme/Theme';
import { ThemeProvider as GlobalThemeProvider } from 'contexts/ThemeContext';
import { DataProvider } from 'contexts/DataContext';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <Theme>
        <DataProvider>
          <Head>
            <link rel="shortcut icon" href="/static/push.png" />
          </Head>
          <Component {...pageProps} />
        </DataProvider>
      </Theme>
      <ToastContainer />
    </GlobalThemeProvider>
  );
}
