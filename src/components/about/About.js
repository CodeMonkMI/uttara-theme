import React from 'react';
import style from './About.module.css';
import Content from './Content';
import Images from './Images';
const About = () => {
  return (
    <div className={style.root}>
      <div className='container'>
        <div className={style.wrapper}>
          <Content />
          <Images />
        </div>
      </div>
    </div>
  );
};

export default About;
