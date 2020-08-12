import React, { createContext, useState, useContext, useCallback } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [mode, toggleDark] = useState('light')

  return (
    <ThemeContext.Provider value={{ mode, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const { mode, toggleDark } = useContext(ThemeContext)

  const toggleThemeMode = useCallback(
    () => toggleDark(mode === 'light' ? 'dart' : 'light'),
    [mode, toggleDark]
  )

  return [mode, toggleThemeMode]
}
