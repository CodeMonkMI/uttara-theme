import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import Persons from 'components/instructor/Persons';
import React from 'react';
const Instructors = () => {
  return (
    <>
      <Breadcrumb title='Instructors' />
      <div className='container'>
        <div className='my-24'>
          <Persons isHome={false} />
        </div>
      </div>
    </>
  );
};

export default Instructors;
