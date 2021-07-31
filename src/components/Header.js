import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Logo to='/'>WANTDO</Logo>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

const Logo = styled(Link)`
  padding: 0 60px;
  padding: 0 3.75rem;
  font-size: 26px;
  font-weight: bold;
`;
