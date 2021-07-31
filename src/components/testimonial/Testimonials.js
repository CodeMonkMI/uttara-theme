import img from 'images/user.png';
import React from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import Testimonial from './Testimonial';
import style from './Testimonials.module.css';
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const list = [
    {
      id: shortid(),
      image: img,
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ',
      name: 'Alexandra',
      post: 'Popular University',
    },
    {
      id: shortid(),
      image: img,
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ',
      name: 'Alexandra',
      post: 'Popular University',
    },
    {
      id: shortid(),
      image: img,
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ',
      name: 'Alexandra',
      post: 'Popular University',
    },
  ];
  return (
    <div className={style.root}>
      <div className='container'>
        <h4 className={style.subTitle}>Testimonials</h4>
        <h2 className={style.title}>Student Community Feedback</h2>
        <Slider {...settings}>
          {list.map((item) => (
            <Testimonial
              key={item.id}
              image={item.image}
              text={item.text}
              post={item.post}
              name={item.name}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
