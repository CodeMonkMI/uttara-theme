import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import React from 'react';
import Persons from './Persons';
const Instructor: React.FC = () => {
  return (
    <div className='py-24 bg-gray-100'>
      <Container>
        <SubTitle align='right'>Instructors</SubTitle>
        <Title align='right'>World-class Instructors</Title>
        <Persons isHome />
      </Container>
    </div>
  );
};

export default Instructor;
