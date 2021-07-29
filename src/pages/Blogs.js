import AllBlogs from 'components/blog/Blogs';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import React from 'react';
const Blogs = () => {
  return (
    <>
      <Breadcrumb title='Blog' />
      <AllBlogs />
    </>
  );
};

export default Blogs;
