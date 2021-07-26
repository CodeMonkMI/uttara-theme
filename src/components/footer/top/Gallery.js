import img2 from 'images/course/2.png';
import img3 from 'images/course/3.png';
import { default as img1, default as img4 } from 'images/course/4.png';
import React from 'react';
import shortid from 'shortid';
import style from './Gallery.module.css';
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
    <div className={style.root}>
      <h2 className={style.title}>Gallery</h2>
      <div className={style.images}>
        {images.map((item) => (
          <div className={style.imgWrapper} key={item.id}>
            <div className={style.imageContainer}>
              <img src={item.image} alt='Gallery' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
