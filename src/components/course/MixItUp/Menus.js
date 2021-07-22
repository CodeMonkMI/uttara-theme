import React from 'react';
import style from './Menus.module.css';
const Menus = ({ setCurrentMenu, menus, currentMenu }) => {
  return (
    <div>
      <div className={style.root}>
        <ul className={style.list}>
          {menus.map((menu) => (
            <li
              className={`${style.item} ${
                currentMenu === menu.slug ? style.active : ''
              }`}
              key={Math.random()}
              onClick={() => setCurrentMenu(menu.slug)}
            >
              {menu.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menus;
