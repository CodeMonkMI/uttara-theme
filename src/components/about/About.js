import { Container } from 'components/styles/Container.styled';
import React from 'react';
import Content from './Content';
import Images from './Images';
const About = () => {
  return (
    <div className='py-20'>
      <Container>
        <div className='flex flex-col md:flex-row md:items-center'>
          <Content />
          <Images />
        </div>
      </Container>
    </div>
  );
};

export default About;
