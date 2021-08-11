import Background from 'images/breadcrumb/1.png';
import React, { useEffect } from 'react';
import style from './Breadcrumb.module.css';

const Breadcrumb = ({ title }) => {
  useEffect(() => (document.title = title), [title]);
  return (
    <div
      className={style.root}
      style={{
        background: `linear-gradient(90deg, #3580ebe6 , #3580ebe6) , url(${Background})`,
      }}
    >
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default Breadcrumb;
