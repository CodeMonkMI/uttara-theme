import data from 'data/Courses';
import Bg from 'images/course/background.png';
import React, { useEffect, useState } from 'react';
import { generate as shortid } from 'shortid';
import MixItUp from '../MixItUp/MixItUp';
import style from './HomeCourses.module.css';
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

  const [courses, setCourses] = useState([]);

  useEffect(() => setCourses(data), []);

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
