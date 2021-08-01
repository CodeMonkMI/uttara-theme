import '@fortawesome/fontawesome-free/css/all.css';
import Bg from 'images/campus-bg.png';
import React from 'react';
import style from './Campus.module.css';
const Campus = () => {
  return (
    <div
      className={style.root}
      style={{
        backgroundImage: `linear-gradient(90deg ,rgb(69 128 237 / 80%) ,rgb(236 115 206 / 82%)) , url(${Bg})`,
      }}
    >
      <div className='container'>
        <h2 className={style.title}>Watch Campus Life Video Tour</h2>
        <p className={style.subTitle}>
          we believe everyone should have the to create progress through
          technology and develop the skills of tomorrow. assessments, learning
        </p>
        <div className={style.video}>
          <div className={style.icon}>
            <i className='fas fa-play'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
