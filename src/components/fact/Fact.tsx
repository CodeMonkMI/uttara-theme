import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import React from 'react';
// import { generate as shortid } from 'shortid';
import Item from './Item';
const shortid = () => Math.ceil(Math.random() * 9999);
interface ItemProps {
  number: number | string;
  value: string;
  id: number | string;
}
const Fact: React.FC = () => {
  const items: ItemProps[] = [
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
    <div className='bg-gray-300 py-24 text-center'>
      <Container>
        <SubTitle align='center'>Funfact</SubTitle>
        <Title align='center'>Strength in Numbers</Title>
        <div className='flex flex-wrap'>
          {items.map((item: ItemProps) => (
            <Item key={item.id} value={item.value} number={item.number} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Fact;
