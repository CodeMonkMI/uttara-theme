import logo from 'images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className='py-5'>
      <Link to='/'>
        <div className='lg:w-32'>
          <img src={logo} alt='' />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
