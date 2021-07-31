import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getData } from '../utils/http';
import { main } from '../utils/color';

const Nav = ({}) => {
  const [cafeList, setCafeList] = useState([]);
  const [curNav, setCurNav] = useState('전체');

  const getAllCafes = useCallback(() => {
    getData(`/bean/getallcafes`, (res) => {
      setCafeList(res.results);
    });
  }, []);

  useEffect(() => {
    getAllCafes();
  }, [getAllCafes]);

  const onClickNav = useCallback((e) => {
    setCurNav(e.target.value);
  }, []);

  return (
    <Container>
      <NavList>
        <NavItem current={curNav === '전체'}>
          <Btn value='전체' onClick={onClickNav}>
            전체
          </Btn>
        </NavItem>
        {cafeList &&
          cafeList.map((cafe) => (
            <NavItem key={cafe.no} current={curNav === cafe.name}>
              <Btn value={cafe.name} onClick={onClickNav}>
                {cafe.name}
              </Btn>
            </NavItem>
          ))}
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
  max-width: 1140px;
  height: 60px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const NavItem = styled.li`
  border-bottom: ${(props) => props.current && `3px solid ${main}`};
  transition: s-bottom 1.5s ease-in-out;
`;

const Btn = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
  &:focus {
    font-weight: 700;
  }
`;
