import React, { useEffect, useContext } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { type IContextValue, ThemeContext } from '../theme-context/themeContext';
import { clearSearch } from '../store/searchSlice';
import type { AppDispatchType } from '../store';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();

  const { theme, changeTheme } = useContext(ThemeContext) as IContextValue;

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  });

  const handleClick = (): void => {
    dispatch(clearSearch());
  };
  return (
    <div className="header">
      <Link
        className="nav"
        to="/"
        onClick={handleClick}
      >
        Where in the world?
      </Link>
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
