import img1 from 'images/about/1.png';
import img2 from 'images/about/2.png';
import img3 from 'images/about/3.png';
import React from 'react';

const Images: React.FC<{}> = () => {
  return (
    <div className=' w-full md:w-1/2 order-1 md:order-none'>
      <div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='flex justify-center flex-col'>
            <div className='rounded-md overflow-hidden opacity-50 mb-5'>
              <img
                src={img1}
                alt=''
                className='transform hover:scale-110 transition-all duration-500 ease-in'
              />
            </div>
            <div className='rounded-md overflow-hidden'>
              <img
                src={img3}
                alt=''
                className='transform hover:scale-110 transition-all duration-500 ease-in'
              />
            </div>
          </div>
          <div>
            <div className='rounded-md overflow-hidden'>
              <img
                src={img2}
                alt=''
                className='transform hover:scale-110 transition-all duration-500 ease-in'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
