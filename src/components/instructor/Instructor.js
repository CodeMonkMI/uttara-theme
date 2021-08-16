import { SubTitle, Title } from 'components/styles/Section.styled';
import React from 'react';
import style from './Instructor.module.css';
import Persons from './Persons';
const Instructor = () => {
  return (
    <div className={style.root}>
      <div className='container'>
        <SubTitle align='right'>Instructors</SubTitle>
        <Title align='right'>World-class Instructors</Title>
        <Persons isHome />
      </div>
    </div>
  );
};

export default Instructor;
