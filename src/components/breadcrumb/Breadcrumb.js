import React from 'react';
import style from './Breadcrumb.module.css';

const Breadcrumb = ({ background, title }) => {
  return (
    <div
      className={style.root}
      style={{
        background: `linear-gradient(90deg, #3580ebe6 , #3580ebe6) , url(${background})`,
      }}
    >
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default Breadcrumb;
