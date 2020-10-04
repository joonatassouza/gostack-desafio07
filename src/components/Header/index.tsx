import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          exact
          activeStyle={{
            paddingBottom: 10,
            borderBottomWidth: 2,
            borderBottomColor: '#FF872C',
            borderBottomStyle: 'solid',
          }}
          to="/"
        >
          Listagem
        </NavLink>
        <NavLink
          activeStyle={{
            paddingBottom: 10,
            borderBottomWidth: 2,
            borderBottomColor: '#FF872C',
            borderBottomStyle: 'solid',
          }}
          to="/import"
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
