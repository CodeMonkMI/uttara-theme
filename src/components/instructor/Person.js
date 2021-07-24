import React from 'react';
import style from './Person.module.css';
const Person = ({
  image,
  name,
  position,
  facebook,
  instagram,
  twitter,
  linkedIn,
}) => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <img src={image} alt={name} />
        </div>
        <div className={style.container}>
          <h4 className={style.name}>{name}</h4>
          <p className={style.position}>{position}</p>
          <ul className={style.list}>
            <li className={style.item}>
              <a href={facebook} className={style.link}>
                <i class='fab fa-facebook'></i>
              </a>
            </li>
            <li className={style.item}>
              <a href={twitter} className={style.link}>
                <i class='fab fa-twitter'></i>
              </a>
            </li>
            <li className={style.item}>
              <a href={instagram} className={style.link}>
                <i class='fab fa-instagram'></i>
              </a>
            </li>
            <li className={style.item}>
              <a href={linkedIn} className={style.link}>
                <i class='fab fa-linkedin-in'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Person;
