import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import AllCourses from 'components/course/Courses/AllCourses';
import React from 'react';

const Courses: React.FC = () => {
  return (
    <>
      <Breadcrumb title='Courses' />
      <AllCourses />
    </>
  );
};

export default Courses;
