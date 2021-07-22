import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeContext';

export default function Button(props) {
  
  const {theme} = useContext(ThemeContext);


  return(
  <button  
  onClick={props.onClick}
  style={{ 
    color: theme === 'dark' ? '#ffff' : '#000',
    background: theme === 'dark' ? '#000' : '#ffff',  
  }}
  >
    {props.children}
  </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}