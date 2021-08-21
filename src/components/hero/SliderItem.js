import { SecondaryButton } from 'components/styles/Buttons.styled';
import { HeroSubTitle, HeroTitle } from 'components/styles/Section.styled';
import React from 'react';

const SliderItem = ({ image, title, subTitle, text, button, url }) => {
  return (
    <div className='sm:flex justify-between items-center box-border'>
      <div className='box-border sm:w-3/5'>
        <HeroSubTitle>{subTitle}</HeroSubTitle>
        <HeroTitle>{title}</HeroTitle>
        <p className='uppercase mb-6 text-lg leading-7 md:text-base text-white'>
          {text}
        </p>
        <SecondaryButton as='a' href={url}>
          {button}
        </SecondaryButton>
      </div>
      <div className='hidden sm:block sm:w-2/5'>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default SliderItem;
