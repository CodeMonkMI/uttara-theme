import { Container } from 'components/styles/Container.styled';
import img1 from 'images/facility/1.png';
import img2 from 'images/facility/2.png';
import img3 from 'images/facility/3.png';
import img4 from 'images/facility/4.png';
import React from 'react';
import Slider from 'react-slick';
// import shortId  from 'shortid';
import Box from './Box';
const shortId = () => Math.ceil(Math.random() * 9999);

interface ItemProperty {
  color: string;
  icon: string;
  text: string;
  id: number | string;
}

const Facility: React.FC = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='mt-16 mb-3 sm:my-24'>
      <Container>
        <Slider {...settings}>
          {list.map((item: ItemProperty) => (
            <Box
              key={item.id}
              text={item.text}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Facility;
