import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import img from 'images/user.png';
import React from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import Testimonial from './Testimonial';

interface ListItemProperty {
  id: string | number;
  image: string;
  text: string;
  post: string;
  name: string;
}

const Testimonials: React.FC = () => {
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
  const list: ListItemProperty[] = [
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
    <div className='py-24'>
      <Container>
        <SubTitle align='center'>Testimonials</SubTitle>
        <Title align='center'>Student Community Feedback</Title>
        <Slider {...settings}>
          {list.map((item: ListItemProperty) => (
            <Testimonial
              key={item.id}
              image={item.image}
              text={item.text}
              post={item.post}
              name={item.name}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonials;
