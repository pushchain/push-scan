// External Library imports
import { createGlobalStyle } from 'styled-components';
import { blocksColors, getBlocksCSSVariables } from '../blocks';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Strawford';
    src:  url('./static/fonts/Strawford-Regular.woff2') format('woff2'),
          url('./static/fonts/Strawford-Regular.woff') format('woff'),
          url('./static/fonts/Strawford-Regular.eot') format('eot'),
          url('./static/fonts/Strawford-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: regular;
  };

  @font-face {
    font-family: 'Strawford';
    src:  url('./static/fonts/Strawford-Medium.woff2') format('woff2'),
          url('./static/fonts/Strawford-Medium.otf') format('otf'),
          url('./static/fonts/Strawford-Medium.ttf') format('ttf');
    font-weight:500 600 700;
    font-style: medium;
  };

  body {
    background: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.text.color};
    font-family:  'Strawford', Helvetica, sans-serif;
    transition: all 0.2s linear;
  }
  :root {
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }
  `;
