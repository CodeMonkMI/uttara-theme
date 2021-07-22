import QuoteImg from 'images/quote.png';
import React from 'react';
import style from './Testimonial.module.css';
const Testimonial = ({ image, text, name, post }) => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          <img src={image} alt={name} />
        </div>
        <div className={style.container}>
          <p className={style.text}>{text}</p>
          <div className={style.quote}>
            <img src={QuoteImg} alt='' />
          </div>
          <h4 className={style.name}>{name}</h4>
          <p className={style.post}>{post}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
