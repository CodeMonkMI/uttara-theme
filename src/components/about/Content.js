import { PrimaryButton } from 'components/styles/Buttons.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import React from 'react';
const Content = () => {
  return (
    <div className='w-full md:w-1/2 box-border pr-5 order-2 mt-5 md:mt-0 md:order-none'>
      <div>
        <SubTitle>About EduGood</SubTitle>
        <Title>Welcome to Our Online Learning Center</Title>
        <p className='text-black font-family-poppins leading-8 text-xl mb-4'>
          we believe everyone should have the opportunity to create progress
          through technology and develop the skills of tomorrow. paths should
          have and learning courses assessments, authored.
        </p>
        <PrimaryButton href='https://www.facebook.com/mdmonir027/' as='a'>
          Read More
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Content;
