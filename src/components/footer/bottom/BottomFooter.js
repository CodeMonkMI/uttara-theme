import logo from 'images/logo.png';
import React from 'react';
import style from './BottomFooter.module.css';
const BottomFooter = () => {
  return (
    <div className={style.root}>
      <div className='container'>
        <div className={style.wrapper}>
          <div className={style.logo}>
            <img src={logo} alt='Logo' className={style.image} />
          </div>
          <p className={style.text}>© 2021 MaanTheme. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
