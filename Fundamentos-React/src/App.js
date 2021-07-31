import React, { useContext } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeContext } from './contexts/ThemeContext'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'


export default function App() {

  const {selectedTheme} = useContext(ThemeContext);
  
  return (
      <StyledThemeProvider theme={themes[selectedTheme] || themes.dark}> 
          <GlobalStyle />
          <Layout />
      </StyledThemeProvider>
  );
}
/* export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      theme: 'dark';
    };

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme(){
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    const {theme} = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}> 
        <ThemeContext.Provider 
          value={{
          onToggleTheme: handleToggleTheme,
          selectedTheme: theme,
          }}
        >
          <GlobalStyle />
          <Layout onToggleTheme={this.handleToggleTheme}/>
        </ThemeContext.Provider>
      </ThemeProvider>
    );
  }
}; */
