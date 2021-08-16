import { SecondaryButton } from 'components/styles/Buttons.styled';
import { HeroSubTitle, HeroTitle } from 'components/styles/Section.styled';
import React from 'react';
import style from './SliderItem.module.css';

const SliderItem = ({ image, title, subTitle, text, button, url }) => {
  return (
    <div className={style.root}>
      <div className={style.content}>
        <HeroSubTitle>{subTitle}</HeroSubTitle>
        <HeroTitle className={style.title}>{title}</HeroTitle>
        <p className={style.text}>{text}</p>
        <SecondaryButton as='a' href={url}>
          {button}
        </SecondaryButton>
      </div>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} className={style.image} />
      </div>
    </div>
  );
};

export default SliderItem;
