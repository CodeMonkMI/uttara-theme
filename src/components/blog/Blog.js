import React from 'react';
import './Blog.css';
const Blog = ({ title, image, text, postedBy, date, url }) => {
  return (
    <div>
      <div className='blog__wrapper font-family-poppins mb-8'>
        <div className='rounded-md h-64 overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='transition-all duration-700 ease-linear'
          />
        </div>
        <h2 className='text-2xl text-black mt-5 leading-9 mb-5 font-bold transition-all duration-300 ease-linear hover:text-blue-500'>
          <a href={url}>{title}</a>
        </h2>
        <div className='leading-7 text-base mb-3 text-black'>{text}</div>
        <div className='flex pt-3 mt-5 border-t-2 border-dashed border-gray-300 '>
          <p className='mr-6 text-gray-700 font-base'>Posted By: {postedBy}</p>
          <p className='text-gray-700 font-base'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// #94949482
