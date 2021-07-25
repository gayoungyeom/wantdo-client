import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Logo>WANTDO</Logo>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

const Logo = styled.div`
  padding: 0 60px;
  padding: 0 3.75rem;
  font-size: 28px;
  font-weight: bold;
`;
