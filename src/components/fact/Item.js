import React from 'react';
const Item = ({ number, value }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/4 p-3 box-border'>
      <div className='bg-white py-5 border-t border-solid border-gray-300 rounded-md'>
        <h2 className='text-blue-500 text-5xl'>{number}</h2>
        <p className='text-xl mt-3 font-family-poppins text-black'>{value}</p>
      </div>
    </div>
  );
};

export default Item;
