import img1 from 'images/hero/1.png';
import BackgroundImage from 'images/hero/hero-background.png';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import style from './Hero.module.css';
import SliderItem from './SliderItem';
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => <span> {i + 1}</span>,
  };

  const sliders = [
    {
      id: 1,
      image: img1,
      title: 'Classical Eduction For The Future',
      subTitle: 'Education For Everyone',
      text: 'we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning',
      button: 'Read more',
      url: '/',
    },
    {
      id: 2,
      image: img1,
      title: 'Classical Eduction For The Future',
      subTitle: 'Education For Everyone',
      text: 'we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning',
      button: 'Read more',
      url: '/',
    },
    {
      id: 3,
      image: img1,
      title: 'Classical Eduction For The Future',
      subTitle: 'Education For Everyone',
      text: 'we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning',
      button: 'Read more',
      url: '/',
    },
  ];

  return (
    <div
      className={style.root}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className='container'>
        <Slider {...settings}>
          {sliders.map((slide) => (
            <SliderItem
              key={slide.id}
              image={slide.image}
              title={slide.title}
              subTitle={slide.subTitle}
              text={slide.text}
              button={slide.button}
              url={slide.url}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
