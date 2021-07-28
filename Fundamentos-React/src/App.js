import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;