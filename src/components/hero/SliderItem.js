import React from 'react';
import style from './SliderItem.module.css';

const SliderItem = ({ image, title, subTitle, text, button, url }) => {
  return (
    <div className={style.root}>
      <div className={style.content}>
        <h6 className={style.subTitle}>{subTitle}</h6>
        <h1 className={style.title}>{title}</h1>
        <p className={style.text}>{text}</p>
        <a href={url} className={style.button}>
          {button}
        </a>
      </div>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} className={style.image} />
      </div>
    </div>
  );
};

export default SliderItem;
