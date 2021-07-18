import React from 'react';
import { generate as shortid } from 'shortid';
import style from './Fact.module.css';
import Item from './Item';
const Fact = () => {
  const items = [
    {
      id: shortid(),
      value: 'Downloaded',
      number: '230 k',
    },
    {
      id: shortid(),
      value: 'Feedback',
      number: '40 k',
    },
    {
      id: shortid(),
      value: 'Worker',
      number: '600 k',
    },
    {
      id: shortid(),
      value: 'Contribution',
      number: '230 k',
    },
  ];
  return (
    <div className={style.root}>
      <div className='container'>
        <h4 className={style.subTitle}>Funfact</h4>
        <h2 className={style.title}>Strength in Numbers</h2>
        <div className={style.numbers}>
          {items.map((item) => (
            <Item key={item.id} value={item.value} number={item.number} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fact;
