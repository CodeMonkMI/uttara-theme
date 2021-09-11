import { Container } from 'components/styles/Container.styled';
import { SubTitle, Title } from 'components/styles/Section.styled';
import React from 'react';
import Items from './Items';
const Why: React.FC = () => {
  return (
    <div className='py-24'>
      <Container>
        <SubTitle align='center'>Why Choose Us</SubTitle>
        <Title align='center'>Why study with us?</Title>
        <Items />
      </Container>
    </div>
  );
};

export default Why;
