import React from 'react';
import style from './Box.module.css';

const Box = ({ color, text, icon }) => {
  return (
    <div className={style.root} style={{ background: color }}>
      <div className={style.iconWrapper}>
        <img src={icon} className={style.icon} alt='' />
      </div>
      <h3 className={style.title}>{text}</h3>
    </div>
  );
};

export default Box;
