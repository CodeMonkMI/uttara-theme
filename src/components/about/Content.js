import React from 'react';
import style from './Content.module.css';
const Content = () => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <h4 className={style.subTitle}>About EduGood</h4>
        <h1 className={style.title}>Welcome to Our Online Learning Center</h1>
        <p className={style.text}>
          we believe everyone should have the opportunity to create progress
          through technology and develop the skills of tomorrow. paths should
          have and learning courses assessments, authored.
        </p>
        <a href='https://www.facebook.com/mdmonir027/' className={style.button}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Content;
