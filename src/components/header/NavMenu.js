import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const menuList = [
    {
      id: '1',
      text: 'Home',
      url: '/',
    },
    {
      id: '2',
      text: 'Courses',
      url: '/courses',
    },
    {
      id: '3',
      text: 'Instructors',
      url: '/instructors',
    },
    {
      id: '4',
      text: 'Blog',
      url: '/blog',
    },
    {
      id: '5',
      text: 'Contact Us',
      url: '/contact-us',
    },
  ];
  return (
    <div>
      <ul className='hidden md:flex'>
        {menuList.map((item) => (
          <Item key={item.id} text={item.text} url={item.url} />
        ))}
      </ul>
      <div className='md:hidden'>
        <i className='fas fa-bars'></i>
      </div>
    </div>
  );
};

const Item = ({ text, url }) => (
  <li className='mr-3 text-black transition-colors duration-500 text-base md:text-xl font-family-poppins last:mr-0'>
    <Link
      to={url}
      className='text-black inline-block w-full h-full p-3 hover:text-blue-500'
    >
      {text}
    </Link>
  </li>
);

export default NavMenu;
