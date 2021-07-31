import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


import { Container } from './styles';

export default function Header() {

  const {onToggleTheme, selectedTheme} = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button"
        title="Mudar tema" 
        onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </button>
    </Container>
  );
}

/* With class components 

export default class Header extends React.Component{

  render() {
    const {onToggleTheme, selectedTheme} = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button 
          type="button"
          title="Mudar tema" 
          onClick={onToggleTheme}
          >
            {selectedTheme === 'dark' ? '🌞' : '🌚'}
          </button>
      </Container>
    );
  }
} */