import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData } from '../utils/http';

import Layout from '../components/Layout';
import Nav from '../components/Nav';

import BeanList from '../components/BeanList';
import BeanItem from '../components/BeanItem';

const Home = () => {
  const [allBeanList, setAllBeanList] = useState([]);

  const PER_PAGE = 10;
  const [page, setPage] = useState(0);

  const getAllBeanList = useCallback(() => {
    getData(`/bean/getallbeans?page=${page}&count=${PER_PAGE}`, (res) => {
      setAllBeanList(res.results);
    });
  }, [page]);

  useEffect(() => {
    getAllBeanList();
  }, [getAllBeanList]);

  return (
    <Layout>
      <Nav />
      <Container>
        <BeanList>
          {allBeanList &&
            allBeanList.map((bean) => (
              <BeanItem
                key={bean.no}
                no={bean.no}
                imgUrl={bean.image}
                name={bean.name}
                cafe={bean.cafe}
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
