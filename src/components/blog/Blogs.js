import img1 from 'images/blog/1.png';
import img2 from 'images/blog/2.png';
import React from 'react';
import shortid from 'shortid';
import Blog from './Blog';
import style from './Blogs.module.css';
const Blogs = () => {
  const blogs = [
    {
      id: shortid(),
      title: 'Those Other College Expenses You Are not Thinking About',
      text: 'we believe everyone should have the to create progress through and develop the skills of tomorrow. assessments, learning paths and courses authored.',
      image: img1,
      postedBy: 'EduGood',
      url: '/',
      date: new Date().toLocaleDateString(),
    },
    {
      id: shortid(),
      title: 'Expenses You Are not Thinking About Those Other College',
      text: 'we believe everyone should have the to create progress through and develop the skills of tomorrow. assessments, learning paths and courses authored.',
      image: img2,
      postedBy: 'EduGood',
      url: '/',
      date: new Date().toLocaleDateString(),
    },
  ];

  return (
    <div className={style.root}>
      <div className='container'>
        <h4 className={style.subTitle}>Latest News</h4>
        <h2 className={style.title}>University Latest Blog</h2>

        <div className={style.all}>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              title={blog.title}
              text={blog.text}
              image={blog.image}
              postedBy={blog.postedBy}
              date={blog.date}
              url={blog.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
