import React from 'react';
import style from './MenuList.module.css';

const MenuList = ({ title, items }) => {
  return (
    <div className={style.root}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {items.map((item) => (
          <li className={style.item} key={item.id}>
            <a href={item.url} className={style.link}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
