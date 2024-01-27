import React, { useEffect, useContext } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import { type IContextValue, ThemeContext } from '../theme-context/themeContext';

const Header: React.FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as IContextValue;

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  });

  return (
    <div className="header">
      <a className="nav" href='#'>Where in the world?</a>
      <button className="theme" onClick={changeTheme}>
        {theme === 'light'
          ? (
          <IoSunnyOutline size="18px" />
            )
          : (
          <IoMoonOutline size="16px" />
            )
        }
        {theme} mode
      </button>
    </div>
  );
};

export default Header;
