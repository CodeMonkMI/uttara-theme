import img1 from 'images/why/1.png';
import img2 from 'images/why/2.png';
import img3 from 'images/why/3.png';
import img4 from 'images/why/4.png';
import img5 from 'images/why/5.png';
import img6 from 'images/why/6.png';
import React from 'react';
import { generate as shortid } from 'shortid';
import Item from './Item';
const Items = () => {
  const items = [
    {
      id: shortid(),
      title: 'Top Paid Faculty',
      text: 'we believe everyone should have the to create',
      url: '/read',
      icon: img1,
    },
    {
      id: shortid(),
      title: 'Graduation Certificate',
      text: 'we believe everyone should have the to create',
      url: '/read',
      icon: img2,
    },
    {
      id: shortid(),
      title: 'Course Facilities',
      text: 'we believe everyone should have the to create',
      url: '/read',
      icon: img3,
    },
    {
      id: shortid(),
      title: '24/7 Support',
      text: 'we believe everyone should have the to create',
      url: '/read',
      icon: img4,
    },
    {
      id: shortid(),
      title: 'Free Books Library',
      text: 'we believe everyone should have the to create',
      url: '/read',
      icon: img5,
    },
    {
      id: shortid(),
      title: '24/7 Support',
      text: 'we believe everyone should have the to create',
      url: '/read',
      icon: img6,
    },
  ];
  return (
    <div className='flex flex-wrap'>
      {items.map((item) => (
        <div className='w-full sm:w-1/2 md:w-1/3' key={item.id}>
          <Item
            text={item.text}
            icon={item.icon}
            title={item.title}
            url={item.url}
          />
        </div>
      ))}
    </div>
  );
};

export default Items;
