import img1 from 'images/facility/1.png';
import img2 from 'images/facility/2.png';
import img3 from 'images/facility/3.png';
import img4 from 'images/facility/4.png';
import React from 'react';
import Slider from 'react-slick';
import { generate as shortId } from 'shortid';
import Box from './Box';
import style from './Facility.module.css';
const Facility = () => {
  const list = [
    {
      id: shortId(),
      text: 'Apply Online',
      color: '#2878EB',
      icon: img1,
    },
    {
      id: shortId(),
      text: 'Press Release ',
      color: '#F04E5D',
      icon: img2,
    },
    {
      id: shortId(),
      text: 'Online Class',
      color: '#C97AF1',
      icon: img3,
    },
    {
      id: shortId(),
      text: 'Scholarship',
      color: '#EC6FC8',
      icon: img4,
    },
    {
      id: shortId(),
      text: 'Apply Online',
      color: '#2878EB',
      icon: img1,
    },
    {
      id: shortId(),
      text: 'Press Release ',
      color: '#F04E5D',
      icon: img2,
    },
    {
      id: shortId(),
      text: 'Online Class',
      color: '#C97AF1',
      icon: img3,
    },
    {
      id: shortId(),
      text: 'Scholarship',
      color: '#EC6FC8',
      icon: img4,
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className={style.root}>
      <div className='container'>
        <Slider {...settings}>
          {list.map((item) => (
            <Box
              key={item.id}
              text={item.text}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Facility;
