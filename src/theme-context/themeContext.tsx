import React, { createContext, useState } from 'react';

export interface IContextValue {
  theme: string
  changeTheme: () => void
};

const ThemeContext = createContext<IContextValue | null>(null);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme: () => void = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const value = { theme, changeTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
