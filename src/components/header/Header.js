import { Container } from 'components/styles/Container.styled';
import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
const Header = () => {
  return (
    <div>
      <Container>
        <div className='flex justify-between items-center'>
          <Logo />
          <NavMenu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
