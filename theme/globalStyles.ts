// External Library imports
import { createGlobalStyle } from 'styled-components';
import { blocksColors, getBlocksCSSVariables } from '../blocks';

export const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'FK Grotesk Neu';
  src: url('./static/fonts/FKGroteskNeue-Regular.woff2') format('woff2'),
    url('./static/fonts/FKGroteskNeue-Regular.woff') format('woff');
  font-weight: 100 400;
  font-style: normal;
}

@font-face {
  font-family: 'FK Grotesk Neu';
  src: url('./static/fonts/FKGroteskNeue-Medium.woff2') format('woff2'),
    url('./static/fonts/FKGroteskNeu-Medium.woff') format('woff');

  font-weight: 500 600;
  font-style: normal;
}

@font-face {
  font-family: 'FK Grotesk Neu';
  src: url('./static/fonts/FKGroteskNeue-Bold.woff2') format('woff2'),
    url('./static/fonts/FKGroteskNeue-Bold.woff') format('woff');
  font-weight: 700 800;
  font-style: normal;
  font-display: swap;
}

  body {
    background: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.text.color};
    font-family:  'Strawford', Helvetica, sans-serif;
    transition: all 0.2s linear;
  }
  :root {
    /* Font Family */
    --font-family: 'FK Grotesk Neu';
    
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }
  `;
