import React from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import NavMenu from './NavMenu';
const Header = () => {
  return (
    <div className={style.root}>
      <div className='container'>
        <div className={style.wrapper}>
          <Logo />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
