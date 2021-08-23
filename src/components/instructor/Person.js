import React from 'react';
const linkClasses =
  'p-2 rounded-md shadow-lg text-white transition-all duration-300 ease-in hover:bg-black';
const Person = (props) => {
  const { image, name, position, facebook, instagram, twitter, linkedIn } =
    props;
  return (
    <div className='w-full box-border p-3'>
      <div className='bg-blue-500 rounded-md overflow-hidden text-center cursor-pointer group'>
        <div className='w-full h-64 overflow-hidden'>
          <img
            src={image}
            alt={name}
            className='transition-all duration-500 ease-in-out group-hover:scale-125'
          />
        </div>
        <div className='py-5 px-1'>
          <h4 className='text-white mb-3 text-xl'>{name}</h4>
          <p className='text-white text-sm'>{position}</p>
          <ul className='flex justify-center mt-6 '>
            <li className='mr-3'>
              <a href={facebook} className={linkClasses}>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li className='mr-3'>
              <a href={twitter} className={linkClasses}>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li className='mr-3'>
              <a href={instagram} className={linkClasses}>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href={linkedIn} className={linkClasses}>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Person;
