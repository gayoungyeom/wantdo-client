import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getData } from '../utils/http';

const Nav = () => {
  const [cafeList, setCafeList] = useState([]);

  const getAllCafes = useCallback(() => {
    getData(`/bean/getallcafes`, (res) => {
      setCafeList(res.results);
    });
  }, []);

  useEffect(() => {
    getAllCafes();
  }, [getAllCafes]);

  return (
    <Container>
      <NavList>
        {cafeList &&
          cafeList.map((cafe) => (
            <NavItem key={cafe.no}>
              <Btn>{cafe.name}</Btn>
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

const NavItem = styled.li``;

const Btn = styled.button`
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
  background: #fff;
  border: none;
  cursor: pointer;
`;
