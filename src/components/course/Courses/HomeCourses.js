import img2 from 'images/course/2.png';
import img3 from 'images/course/3.png';
import img1 from 'images/course/4.png';
import Bg from 'images/course/background.png';
import React from 'react';
import { generate as shortid } from 'shortid';
import MixItUp from '../MixItUp/MixItUp';
import style from './HomeCourse.module.css';
const HomeCourses = () => {
  const menus = [
    {
      id: shortid(),
      value: 'All Courses',
      slug: 'all',
    },
    {
      id: shortid(),
      value: 'Data Science & Analytics',
      slug: 'dsa',
    },
    {
      id: shortid(),
      value: 'Computer Science',
      slug: 'cs',
    },
    {
      id: shortid(),
      value: 'Foreign Language',
      slug: 'fl',
    },
  ];
  const courses = [
    {
      image: img1,
      categories: ['Art', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '250.00',
      url: '/a',
      catSlug: 'code',
    },
    {
      image: img2,
      categories: ['Data', 'Design'],
      title: 'Fundamentals Design Theory Learn New student',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '150.00',
      url: '/a',
      catSlug: 'code',
    },
    {
      image: img3,
      categories: ['Ui/Ux', 'Design'],
      title: 'Development Theory Learn student in New Batch',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '350.00',
      url: '/a',
      catSlug: 'code',
    },
    {
      image: img1,
      categories: ['Art', 'Design'],
      title: 'Music Theory Learn student New & Fundamentals',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '250.00',
      url: '/a',
      catSlug: 'code',
    },
    {
      image: img2,
      categories: ['Data', 'Design'],
      title: 'Fundamentals Design Theory Learn New student',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '150.00',
      url: '/a',
      catSlug: 'code',
    },
    {
      image: img3,
      categories: ['Ui/Ux', 'Design'],
      title: 'Development Theory Learn student in New Batch',
      time: '12 Week',
      stars: [1, 2, 3, 4],
      price: '350.00',
      url: '/a',
      catSlug: 'code',
    },
  ];

  return (
    <div
      className={style.root}
      style={{
        background: `linear-gradient(#3e7eecd9 , #3e7eecd9) , url(${Bg})`,
      }}
    >
      <div className='container'>
        <h4 className={style.subTitle}>Browse Categories</h4>
        <h2 className={style.title}>Pick a Course to Get Started</h2>
        <MixItUp menus={menus} items={courses} />
      </div>
    </div>
  );
};

export default HomeCourses;
