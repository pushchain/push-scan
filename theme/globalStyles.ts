// External Library imports
import { createGlobalStyle } from 'styled-components';
import { getBlocksCSSVariables } from '../blocks';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'FK Grotesk Neu';
  src: url('${basePath}/static/fonts/FKGroteskNeue-Regular.woff2') format('woff2'),
    url('${basePath}/static/fonts/FKGroteskNeue-Regular.woff') format('woff');
  font-weight: 100 400;
  font-style: normal;
}

@font-face {
  font-family: 'FK Grotesk Neu';
  src: url('${basePath}/static/fonts/FKGroteskNeue-Medium.woff2') format('woff2'),
    url('${basePath}/static/fonts/FKGroteskNeu-Medium.woff') format('woff');

  font-weight: 500 600;
  font-style: normal;
}

@font-face {
  font-family: 'FK Grotesk Neu';
  src: url('${basePath}/static/fonts/FKGroteskNeue-Bold.woff2') format('woff2'),
    url('${basePath}/static/fonts/FKGroteskNeue-Bold.woff') format('woff');
  font-weight: 700 800;
  font-style: normal;
}

  body {
    background: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.text.color};
    font-family: var(--font-family);
    transition: all 0.2s linear;
  }

  a {
    text-decoration: none! important;
  }
 
  :root {
    /* Font Family */
    --font-family: 'FK Grotesk Neu';
    
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }
  `;
