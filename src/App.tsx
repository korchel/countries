import React from 'react';

import ThemeProvider from './theme-context/themeContext';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <div className="container">
        <p>
          !!!!
        </p>
      </div>
    </ThemeProvider>
  );
};

export default App;
