import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Layout from '../components/Layout';
import BeanList from '../components/BeanList';
import BeanItem from '../components/BeanItem';

import { getData } from '../utils/http';
import { main } from '../utils/color';
import { cafeLogos, cafeColors } from '../utils/brand';

const Home = () => {
  const [cafeList, setCafeList] = useState([]);
  const [beanList, setBeanList] = useState([]);
  const [curNav, setCurNav] = useState('전체');

  const PER_PAGE = 30;
  const [page, setPage] = useState(0);

  const getAllCafes = useCallback(() => {
    getData(`/bean/getallcafes`, (res) => {
      setCafeList(res.results);
    });
  }, []);

  const getAllBeanList = useCallback(() => {
    getData(`/bean/getallbeans?page=${page}&count=${PER_PAGE}`, (res) => {
      setBeanList(res.results);
    });
  }, [page]);

  const getBeanListByCafe = useCallback(
    (no) => {
      getData(
        `/bean/getbeansbycafe?cafe_no=${no}&page=${page}&count=${PER_PAGE}`,
        (res) => {
          setBeanList(res.results);
        }
      );
    },
    [page]
  );

  useEffect(() => {
    getAllCafes();
    getAllBeanList();
  }, [getAllCafes, getAllBeanList]);

  const onClickNav = useCallback(
    (e) => {
      setCurNav(e.target.value);
      if (e.target.value === '전체') {
        getAllBeanList();
      } else {
        const no = e.target.name;
        getBeanListByCafe(no);
      }
    },
    [getAllBeanList, getBeanListByCafe]
  );

  return (
    <Layout>
      <Helmet>
        <title>{`WANTDO | ${curNav}`}</title>
      </Helmet>
      <NavContainer>
        <NavList>
          <NavItem current={curNav === '전체'}>
            <Btn value='전체' onClick={onClickNav}>
              전체
            </Btn>
          </NavItem>
          {cafeList &&
            cafeList.map((cafe) => (
              <NavItem
                no={cafe.no}
                key={cafe.no}
                current={curNav === cafe.name}
              >
                <Logo src={cafeLogos[cafe.no - 1]} />
                <Btn
                  no={cafe.no}
                  name={cafe.no}
                  value={cafe.name}
                  onClick={onClickNav}
                >
                  {cafe.name}
                </Btn>
              </NavItem>
            ))}
        </NavList>
      </NavContainer>

      <Container>
        <BeanList>
          {beanList &&
            beanList.map((bean) => (
              <BeanItem
                key={bean.no}
                no={bean.no}
                imgUrl={bean.image}
                name={bean.name}
                cafe={bean.cafe}
                cafeNo={bean.cafe_no}
              />
            ))}
        </BeanList>
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  padding: 25px;
`;

const NavContainer = styled.div`
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
  display: flex;
  align-items: center;
  border-bottom: ${(props) => props.current && `3px solid ${main}`};
  transition: s-bottom 1.5s ease-in-out;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

const Btn = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  &:hover,
  :focus {
    font-weight: 700;
    /* color: ${(props) => cafeColors[props.no - 1]}; */
  }
`;
