import QuoteImg from 'images/quote.png';
import React from 'react';
import './Testimonial.css';
const Testimonial = ({ image, text, name, post }) => {
  return (
    <div className='text-center box-border px-3 relative pb-10'>
      <div>
        <div className='w-24 h-24 absolute testimonial__imageWrapper'>
          <img src={image} alt={name} />
        </div>
        <div className='border-t border-gray-300 pt-16 pb-8 px-11 testimonial__container'>
          <p className='leading-7 text-base text-black mb-3 mt-5 testimonial__text '>
            {text}
          </p>
          <div className='w-8 h-8 my-4'>
            <img src={QuoteImg} alt='' />
          </div>
          <h4 className='text-xl font-bold text-black mb-2 testimonial__text'>
            {name}
          </h4>
          <p>{post}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
