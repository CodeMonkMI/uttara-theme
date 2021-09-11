import bg from 'images/campus-bg.png';
import React from 'react';
import BottomFooter from './bottom/BottomFooter';
import Top from './top/Top';
const Footer = () => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat'
      style={{
        background: `linear-gradient(90deg, rgb(50 116 223 / 70%), rgb(222 52 195 / 70%)) , url(${bg})`,
      }}
    >
      <Top />
      <BottomFooter />
    </div>
  );
};

export default Footer;
