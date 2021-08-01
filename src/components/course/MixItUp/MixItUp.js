import React, { useEffect, useState } from 'react';
import CourseBox from '../shared/CourseBox';
import Menus from './Menus';
import style from './MixItUp.module.css';

const MixItUp = ({ menus, items }) => {
  const [currentMenu, setCurrentMenu] = useState('all');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (currentMenu === 'all') {
      setCourses(items.slice(0, 6));
    } else {
      setCourses(items.filter((item) => item.catSlug === currentMenu));
    }
  }, [items, currentMenu]);

  return (
    <div className={style.root}>
      <Menus
        setCurrentMenu={setCurrentMenu}
        menus={menus}
        currentMenu={currentMenu}
      />

      <div className={style.container}>
        <div className={style.wrapper}>
          {courses.map((course) => (
            <CourseBox
              key={course.id}
              image={course.image}
              categories={course.categories}
              price={course.price}
              stars={course.stars}
              title={course.title}
              time={course.time}
              url={course.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MixItUp;
