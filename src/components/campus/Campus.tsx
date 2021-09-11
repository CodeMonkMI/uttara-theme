import '@fortawesome/fontawesome-free/css/all.css';
import { Container } from 'components/styles/Container.styled';
import { Title } from 'components/styles/Section.styled';
import Bg from 'images/campus-bg.png';
import React from 'react';
const Campus: React.FC = () => {
  return (
    <div
      className='py-24 bg-no-repeat bg-center bg-cover text-center'
      style={{
        backgroundImage: `linear-gradient(90deg ,rgb(69 128 237 / 80%) ,rgb(236 115 206 / 82%)) , url(${Bg})`,
      }}
    >
      <Container>
        <Title align='center' white>
          Watch Campus Life Video Tour
        </Title>
        <p className='text-xl w-full sm:w-9/12 mx-auto text-white leading-7 mb-10'>
          we believe everyone should have the to create progress through
          technology and develop the skills of tomorrow. assessments, learning
        </p>
        <div className='bg-gray-300 h-28 w-28 rounded-full flex justify-center items-center m-auto border-8 border-gray-400 box-border cursor-pointer'>
          <div className='text-2xl text-blue-500'>
            <i className='fas fa-play'></i>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Campus;
