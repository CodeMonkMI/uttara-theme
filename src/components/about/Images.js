import img1 from 'images/about/1.png';
import img2 from 'images/about/2.png';
import img3 from 'images/about/3.png';
import React from 'react';
import style from './Images.module.css';

const Images = () => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.gallery}>
          <div className={style.first}>
            <div className={style.imageWrapper}>
              <img src={img1} alt='' />
            </div>
            <div className={style.imageWrapper}>
              <img src={img3} alt='' />
            </div>
          </div>
          <div>
            <div className={style.imageWrapper}>
              <img src={img2} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
