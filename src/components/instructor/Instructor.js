import React from 'react';
import style from './Instructor.module.css';
import Persons from './Persons';
const Instructor = () => {
  return (
    <div className={style.root}>
      <div className='container'>
        <h4 className={style.subTitle}>Instructors</h4>
        <h2 className={style.title}>World-class Instructors</h2>
        <Persons isHome />
      </div>
    </div>
  );
};

export default Instructor;
