import React, { useEffect, useState } from 'react';
import CourseBox from '../shared/CourseBox';
import Menus from './Menus';

const MixItUp = ({ menus, items }) => {
  const [currentMenu, setCurrentMenu] = useState('all');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (items) {
      if (currentMenu === 'all') {
        setCourses(items.slice(0, 6));
      } else {
        setCourses(items.filter((item) => item.catSlug === currentMenu));
      }
    }
  }, [items, currentMenu]);

  return (
    <div>
      <Menus
        setCurrentMenu={setCurrentMenu}
        menus={menus}
        currentMenu={currentMenu}
      />

      <div className='flex flex-wrap mixItUpContainer'>
        {courses.map((course) => (
          <div className='w-full md:w-1/2 xl:w-1/3' key={course.id}>
            <CourseBox
              image={course.image}
              categories={course.categories}
              price={course.price}
              stars={course.stars}
              title={course.title}
              time={course.time}
              url={course.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MixItUp;
