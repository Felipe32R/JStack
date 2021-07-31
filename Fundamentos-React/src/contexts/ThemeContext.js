import React, { createContext } from 'react'

import { useLocalState } from '../hooks/useLocalState'


export const ThemeContext = createContext();


export function ThemeProvider({children}) {

  const [theme, setTheme] = useLocalState();

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  return(
    <ThemeContext.Provider
      value={{
      onToggleTheme: handleToggleTheme,
      selectedTheme: theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}