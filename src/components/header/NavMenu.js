import React from 'react';
import style from './NavMenu.module.css';
const NavMenu = () => {
  const menuList = [
    {
      id: '1',
      text: 'Home',
      url: '/home',
    },
    {
      id: '2',
      text: 'Course',
      url: '/course',
    },
    {
      id: '3',
      text: 'Instructor',
      url: '/instructor',
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
    </div>
  );
};

const Item = ({ text, url }) => (
  <li className={style.item}>
    <a href={url} className={style.link}>
      {text}
    </a>
  </li>
);

export default NavMenu;
