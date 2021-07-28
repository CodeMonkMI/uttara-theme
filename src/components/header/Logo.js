import logo from 'images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Logo.module.css';
const Logo = () => {
  return (
    <div className={style.root}>
      <Link to='/'>
        <div className={style.wrapper}>
          <img src={logo} alt='' className={style.image} />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
