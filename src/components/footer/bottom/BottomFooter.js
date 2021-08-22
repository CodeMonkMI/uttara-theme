import { Container } from 'components/styles/Container.styled';
import logo from 'images/logo.png';
import React from 'react';
import './BottomFooter.css';

const BottomFooter = () => {
  return (
    <div className='mt-8 border-t border-black py-5'>
      <Container>
        <div className='flex justify-between sm:justify-between items-center flex-wrap'>
          <div className='bottomFooter__logo mb-5 sm:mb-0'>
            <img src={logo} alt='Logo' />
          </div>
          <p className='text-white'>© 2021 MaanTheme. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;
