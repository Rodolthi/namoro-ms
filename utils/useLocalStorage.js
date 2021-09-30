import React from 'react';

export const useLocalStorage = (key, inicial) => {
    
    const [state, setState] = React.useState(() => {
    if (process.browser) {
          const local = window.localStorage.getItem(key);
          return local ? local : inicial;
        }
    });        
  
    React.useEffect(() => {        
        window.localStorage.setItem(key, state);
    }, [key, state]);
  
    return [state, setState];
  };