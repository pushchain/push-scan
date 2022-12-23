import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from './palette';
import { useTheme } from 'contexts/ThemeContext';
import { GlobalStyles } from './globalStyles';

const Theme = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
