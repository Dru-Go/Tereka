import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const themes = {
    light: {
      background: '#F8F8F8',
      icon: '#010001',
      textColor: '#2d3748',
      loading:'lightBounce'
    },
    dark: {
      background: '#010001',
      icon: '#F8F8F8',
      textColor:'#e2e8f0',
      loading:'darkBounce'
    },
  };
  const [curTheme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={[themes, curTheme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
