import React from 'react';
import style from './Item.module.css';
const Item = ({ number, value }) => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <h2 className={style.number}>{number}</h2>
        <p className={style.value}>{value}</p>
      </div>
    </div>
  );
};

export default Item;
