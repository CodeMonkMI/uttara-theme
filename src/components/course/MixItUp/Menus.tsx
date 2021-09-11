import React from 'react';
interface MenuProperty {
  id: string | number;
  value: string;
  slug: string;
}

interface MenusProps {
  setCurrentMenu: (a: string) => void;
  menus: MenuProperty[];
  currentMenu: string;
}

const Menus: React.FC<MenusProps> = ({
  setCurrentMenu,
  menus,
  currentMenu,
}) => {
  return (
    <div>
      <div className='py-3 pb-8'>
        <ul className='flex justify-center flex-wrap'>
          {menus.map((menu: MenuProperty) => (
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
