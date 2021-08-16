import { Container } from 'components/styles/Container.styled';
import React from 'react';
import shortid from 'shortid';
import Contact from './Contact';
import Gallery from './Gallery';
import MenuList from './MenuList';
import style from './Top.module.css';
const Top = () => {
  const menu1 = [
    {
      id: shortid(),
      url: '/',
      value: 'Branding design',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Ui/Ux designing',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Make Elements',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Business',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Graphics design',
    },
  ];
  const menu2 = [
    {
      id: shortid(),
      url: '/',
      value: 'Course',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Instructors',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Sign In',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Sign Up',
    },
    {
      id: shortid(),
      url: '/',
      value: 'Contact',
    },
  ];

  return (
    <Container>
      <div className={style.root}>
        <div>
          <Contact />
        </div>
        <div>
          <MenuList title='Categories' items={menu1} />
        </div>
        <div>
          <MenuList title='Uttara' items={menu2} />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </Container>
  );
};

export default Top;
