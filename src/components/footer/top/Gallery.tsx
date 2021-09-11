import img2 from 'images/course/2.png';
import img3 from 'images/course/3.png';
import { default as img1, default as img4 } from 'images/course/4.png';
import React from 'react';
// import shortid from 'shortid';
import SectionTitle from '../SectionTitle';
const shortid = () => Math.round(Math.random() * 99999);
const Gallery = () => {
  const images = [
    {
      id: shortid(),
      image: img1,
    },
    {
      id: shortid(),
      image: img2,
    },
    {
      id: shortid(),
      image: img3,
    },
    {
      id: shortid(),
      image: img4,
    },
  ];

  return (
    <div>
      <SectionTitle title='Gallery' />
      <div className='flex flex-wrap'>
        {images.map((item) => (
          <div className='w-1/2 box-border overflow-hidden p-2' key={item.id}>
            <div className='overflow-hidden h-24 lg:h-44'>
              <img
                src={item.image}
                alt='Gallery'
                className='transform scale-125'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
