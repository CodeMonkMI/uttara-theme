import img1 from 'images/course/4.png';
import React from 'react';
import Slider from 'react-slick';
import CourseBox from '../shared/CourseBox';
import style from './AllFeaturedCourses.module.css';
const AllFeaturedCourses = () => {
  const list = [
    {
      image: img1,
      categories: ['Ui', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '120',
      url: '/a',
    },
    {
      image: img1,
      categories: ['Ui', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '120',
      url: '/a',
    },
    {
      image: img1,
      categories: ['Ui', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '120',
      url: '/a',
    },
    {
      image: img1,
      categories: ['Ui', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '120',
      url: '/a',
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={style.root + ' featured'}>
      <div className='container'>
        <h4 className={style.subTitle}>New Courses</h4>
        <h2 className={style.title}>Featured Courses</h2>
        <Slider {...settings}>
          {list.map((item) => (
            <CourseBox
              key={item.title}
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
      </div>
    </div>
  );
};

export default AllFeaturedCourses;
