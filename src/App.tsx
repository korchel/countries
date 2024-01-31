import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import ThemeProvider from './theme-context/themeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryInfoPage from './pages/CountryInfoPage';
import NotFoundPage from './pages/NotFoundPage';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<CountryInfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
