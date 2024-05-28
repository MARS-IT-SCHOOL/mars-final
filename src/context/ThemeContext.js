// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const changeTheme = (theme) => {
    // Logic to change the theme
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme); // Save theme in localStorage
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
