import { Container } from 'components/styles/Container.styled';
import React from 'react';
import style from './About.module.css';
import Content from './Content';
import Images from './Images';
const About = () => {
  return (
    <div className={style.root}>
      <Container>
        <div className={style.wrapper}>
          <Content />
          <Images />
        </div>
      </Container>
    </div>
  );
};

export default About;
