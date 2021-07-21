import React from 'react';
import style from './Item.module.css';
const Item = ({ icon, title, text, url }) => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.icon}>
          <img src={icon} alt={title} className={style.image} />
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
        <a href={url} className={style.button}>
          Read More
          <span>&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default Item;
