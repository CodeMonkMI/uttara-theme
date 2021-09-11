import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';

interface MenuListProps {
  title: string;
  items: any;
}

interface Item {
  id: number | string;
  value: string;
  url: string;
}

const MenuList: React.FC<MenuListProps> = ({ title, items }) => {
  return (
    <div>
      <SectionTitle title={title} />
      <ul className='font-family-poppins'>
        {items.map((item: Item) => (
          <li
            className='mb-5 text-base text-white transition-all duration-500 last:mb-0'
            key={item.id}
          >
            <Link to={item.url} className='hover:text-black'>
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
