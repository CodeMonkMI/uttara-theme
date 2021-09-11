import AllBlogs from 'components/blog/Blogs';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import React from 'react';
const Blogs: React.FC = () => {
  return (
    <>
      <Breadcrumb title='Blog' />
      <AllBlogs isHome={false} />
    </>
  );
};

export default Blogs;
