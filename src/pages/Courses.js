import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import AllCourses from 'components/course/Courses/AllCourses';
import Background from 'images/breadcrumb/1.png';
import React from 'react';

const Courses = () => {
  return (
    <>
      <Breadcrumb background={Background} title='Courses' />
      <AllCourses />
    </>
  );
};

export default Courses;
