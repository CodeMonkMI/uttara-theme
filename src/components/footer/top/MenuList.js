import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';

const MenuList = ({ title, items }) => {
  return (
    <div>
      <SectionTitle title={title} />
      <ul className='font-family-poppins'>
        {items.map((item) => (
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
