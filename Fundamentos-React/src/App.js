import React, { useMemo, useEffect, createContext} from 'react';

import { ThemeProvider } from 'styled-components'

import { useLocalState } from './hooks/useLocalState'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'


export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useLocalState();

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}> 
      <ThemeContext.Provider 
        value={{
        onToggleTheme: handleToggleTheme,
        selectedTheme: theme,
        }}
      >
        <GlobalStyle />
        <Layout />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;