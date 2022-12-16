import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';

import { lightPalette, darkPalette } from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { useTheme } from '../contexts/ThemeContext';

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }: { children: any }) {
  const { isDarkMode } = useTheme();
  const themeOptions: any = useMemo(
    () => ({
      palette: isDarkMode ? darkPalette : lightPalette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    [isDarkMode]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
