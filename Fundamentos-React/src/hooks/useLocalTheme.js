
import { useState, useEffect } from 'react'

// Custom hook para salvar o state de alguma variável no localStorage
export function useLocalState(key, initialValue = 'dark'){
  const [state, setState] = useState(() => {

    const storedData = localStorage.getItem(key);
  
    if(storedData) {
      return JSON.parse(storedData)
    }
    return initialValue; 
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
