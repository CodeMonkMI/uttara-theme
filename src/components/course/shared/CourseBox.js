import React from 'react';
import style from './CourseBox.module.css';
const CourseBox = ({ image, categories, title, time, stars, price, url }) => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.top} style={{ backgroundImage: `url(${image})` }}>
          <ul className={style.list}>
            {categories.map((cat) => (
              <li className={style.item} key={cat}>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.timeStars}>
            <span>{time}</span>
            <ul className={style.stars}>
              {stars.map((star) => (
                <li className={style.star} key={Math.random()}>
                  &#10032;
                </li>
              ))}
            </ul>
          </div>
          <div className={style.priceDetails}>
            <span className={style.price}>&#36;{parseFloat(price)}</span>
            <a href={url} className={style.button}>
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
