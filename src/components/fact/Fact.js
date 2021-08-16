import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
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
      <Container>
        <SubTitle align='center'>Funfact</SubTitle>
        <Title align='center'>Strength in Numbers</Title>
        <div className={style.numbers}>
          {items.map((item) => (
            <Item key={item.id} value={item.value} number={item.number} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Fact;
