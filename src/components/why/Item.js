import React from 'react';
const Item = ({ icon, title, text, url }) => {
  return (
    <div className='w-full box-border p-3'>
      <div className='border group shadow-md hover:bg-gray-200 transition-all duration-500 ease-in-out py-3 px-5 box-border rounded-md cursor-pointer'>
        <div className='w-20 h-20 mb-5'>
          <img src={icon} alt={title} className='object-contain' />
        </div>
        <h2 className='text-black mb-4 text-xl font-bold'>{title}</h2>
        <p className='text-xl leading-7 text-black mb-5'>{text}</p>
        <a href={url} className='text-base font-bold text-blue-500 group'>
          Read More
          <span className='ml-2 transition-all duration-500 group-hover:ml-3'>
            &#8594;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Item;
