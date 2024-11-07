import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="shortcut icon" href='./static/push.png' />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
