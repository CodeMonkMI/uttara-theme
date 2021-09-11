import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import img2 from 'images/course/2.png';
import img3 from 'images/course/3.png';
import img1 from 'images/course/4.png';
import React from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import { CourseProperty } from 'types/AllTypes';
import CourseBox from '../shared/CourseBox';
import './AllFeaturedCourses.css';
const AllFeaturedCourses = () => {
  const list: CourseProperty[] = [
    {
      id: shortid(),
      image: img1,
      categories: ['Art', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '250.00',
      url: '/a',
      catSlug: '',
    },
    {
      id: shortid(),
      image: img2,
      categories: ['Data', 'Design'],
      title: 'Fundamentals Design Theory Learn New student',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '150.00',
      url: '/a',
      catSlug: '',
    },
    {
      id: shortid(),
      image: img3,
      categories: ['Ui/Ux', 'Design'],
      title: 'Development Theory Learn student in New Batch',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '350.00',
      url: '/a',
      catSlug: '',
    },
    {
      id: shortid(),
      image: img1,
      categories: ['Art', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '250.00',
      url: '/a',
      catSlug: '',
    },
    {
      id: shortid(),
      image: img2,
      categories: ['Data', 'Design'],
      title: 'Fundamentals Design Theory Learn New student',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '150.00',
      url: '/a',
      catSlug: '',
    },
    {
      id: shortid(),
      image: img3,
      categories: ['Ui/Ux', 'Design'],
      title: 'Development Theory Learn student in New Batch',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '350.00',
      url: '/a',
      catSlug: '',
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={'py-16  allFeaturedCourses__root bg-black'}>
      <Container>
        <SubTitle white align='right'>
          New Courses
        </SubTitle>
        <Title white align='right'>
          Featured Courses
        </Title>
        <Slider {...settings}>
          {list.map((item) => (
            <CourseBox
              key={item.id}
              image={item.image}
              categories={item.categories}
              title={item.title}
              time={item.time}
              price={item.price}
              url={item.url}
              stars={item.stars}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default AllFeaturedCourses;
