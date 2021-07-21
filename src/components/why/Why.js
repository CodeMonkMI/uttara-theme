import React from 'react';
import Items from './Items';
import style from './Why.module.css';
const Why = () => {
  return (
    <div className={style.root}>
      <div className='container'>
        <h2 className={style.subTitle}>Why Choose Us</h2>
        <h2 className={style.title}>Why study with us?</h2>
        <Items />
      </div>
    </div>
  );
};

export default Why;
