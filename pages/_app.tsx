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

// const strawFord = localFont({
//   src: [
//     {
//       path: './static/fonts/Strawford-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './static/fonts/Strawford-Regular.woff',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './static/fonts/Strawford-Regular.eot',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './static/fonts/Strawford-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
// });

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
