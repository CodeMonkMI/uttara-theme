import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import Persons from 'components/instructor/Persons';
import React from 'react';
import style from './Instructors.module.css';
const Instructors = () => {
  return (
    <>
      <Breadcrumb title='Instructors' />
      <div className='container'>
        <div className={style.wrapper}>
          <Persons />
        </div>
      </div>
    </>
  );
};

export default Instructors;
