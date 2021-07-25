import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = ({ cafes }) => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <Btn>스타벅스</Btn>
        </NavItem>
        <NavItem>
          <Btn>투썸플레이스</Btn>
        </NavItem>
        <NavItem>
          <Btn>이디야</Btn>
        </NavItem>
        <NavItem>
          <Btn>폴바셋</Btn>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Nav;

Nav.propTypes = {
  cafes: PropTypes.array,
};

Nav.defaultProps = {
  cafes: [],
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1140px;
  height: 60px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const NavItem = styled.li``;

const Btn = styled.button`
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
  background: #fff;
  border: none;
  cursor: pointer;
`;
