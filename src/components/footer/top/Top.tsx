import { Container } from 'components/styles/Container.styled';
import React from 'react';
// import shortid from 'shortid';
import Contact from './Contact';
import Gallery from './Gallery';
import MenuList from './MenuList';
const divClassNames = 'box-border px-1 text-center sm:text-left';

const shortid = () => Math.round(Math.random() * 99999);

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
      <div className='flex pt-24 pb-12 flex-wrap justify-between'>
        <div className={`${divClassNames} mb-10 lg:w-1/5`}>
          <Contact />
        </div>
        <div className={`${divClassNames}`}>
          <MenuList title='Categories' items={menu1} />
        </div>
        <div className={`${divClassNames}`}>
          <MenuList title='Uttara' items={menu2} />
        </div>
        <div className={`${divClassNames} lg:w-1/3`}>
          <Gallery />
        </div>
      </div>
    </Container>
  );
};

export default Top;
