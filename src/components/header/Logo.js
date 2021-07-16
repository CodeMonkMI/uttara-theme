import logo from 'images/logo.png';
import React from 'react';
import style from './Logo.module.css';
const Logo = () => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <img src={logo} alt='' className={style.image} />
      </div>
    </div>
  );
};

export default Logo;
