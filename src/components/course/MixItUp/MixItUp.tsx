import React, { useEffect, useState } from 'react';
import { CourseProperty } from 'types/AllTypes';
import CourseBox from '../shared/CourseBox';
import Menus from './Menus';

interface MenuProperty {
  id: string | number;
  value: string;
  slug: string;
}

interface MenusProps {
  setCurrentMenu: (a: string) => void;
  menus: MenuProperty[];
  currentMenu: string;
}

interface MixItUpProps {
  menus: MenuProperty[];
  items: CourseProperty[];
}

const MixItUp: React.FC<MixItUpProps> = ({ menus, items }) => {
  const [currentMenu, setCurrentMenu] = useState('all');
  const [courses, setCourses] = useState<CourseProperty[] | any>(null);

  useEffect(() => {
    if (currentMenu === 'all') {
      setCourses(items.slice(0, 6));
    } else {
      setCourses(items.filter((item) => item.catSlug === currentMenu));
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
        {courses.map((course: CourseProperty) => (
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
