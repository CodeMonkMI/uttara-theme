import React from 'react';
const Menus = ({ setCurrentMenu, menus, currentMenu }) => {
  return (
    <div>
      <div className='py-3 pb-8'>
        <ul className='flex justify-center flex-wrap'>
          {menus.map((menu) => (
            <li
              className={`text-base mr-5 cursor-pointer ${
                currentMenu === menu.slug ? 'text-black' : 'text-white '
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
