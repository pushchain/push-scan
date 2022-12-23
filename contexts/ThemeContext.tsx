import React, { useEffect, useState, useContext, createContext } from 'react';

const defaultTheme: any = {
  isDarkMode: false,
  darkModeToggle: () => {
    alert('clicked');
  },
};

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }: { children: any }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    if (isDarkMode) {
      setDarkMode(!isDarkMode);
      localStorage.removeItem('darkMode');
    } else {
      setDarkMode(!isDarkMode);
      localStorage.setItem('darkMode', !isDarkMode + '');
    }
  };

  useEffect(() => {
    (async () => {
      const darkMode = localStorage.getItem('darkMode');
      if (darkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    })();
  }, []);
  return (
    <ThemeContext.Provider value={{ isDarkMode, darkModeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
