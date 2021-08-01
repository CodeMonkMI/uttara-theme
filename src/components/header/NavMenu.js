import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavMenu.module.css';

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
    <div className={style.root}>
      <ul className={style.list}>
        {menuList.map((item) => (
          <Item key={item.id} text={item.text} url={item.url} />
        ))}
      </ul>
      <div className={style.menuIcon}>
        <i className='fas fa-bars'></i>
      </div>
    </div>
  );
};

const Item = ({ text, url }) => (
  <li className={style.item}>
    <Link to={url} className={style.link}>
      {text}
    </Link>
  </li>
);

export default NavMenu;
