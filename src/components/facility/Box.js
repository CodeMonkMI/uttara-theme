import React from 'react';

const Box = ({ color, text, icon }) => {
  return (
    <div
      className='mx-3 py-10 box-border text-center rounded-md'
      style={{ background: color }}
    >
      <div className='w-20 h-16 mb-3 mx-auto'>
        <img src={icon} className='object-contain' alt='' />
      </div>
      <h3 className='text-white'>{text}</h3>
    </div>
  );
};

export default Box;
