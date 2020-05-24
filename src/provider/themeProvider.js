import React, { createContext, useState, useContext, useCallback } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, toggleDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ mode, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const { mode: isLightMode, toggleDark } = useContext(ThemeContext);

  const toggleThemeMode = useCallback(() => toggleDark(!isLightMode), [
    isLightMode,
    toggleDark
  ]);

  return [isLightMode, toggleThemeMode];
};
