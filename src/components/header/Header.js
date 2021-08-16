import { Container } from 'components/styles/Container.styled';
import React from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import NavMenu from './NavMenu';
const Header = () => {
  return (
    <div className={style.root}>
      <Container>
        <div className={style.wrapper}>
          <Logo />
          <NavMenu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
