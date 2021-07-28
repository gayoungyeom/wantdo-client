import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData } from '../utils/http';

import Layout from '../components/Layout';
import BeanList from '../components/BeanList';
import BeanItem from '../components/BeanItem';

const Home = () => {
  const [allBeanList, setAllBeanList] = useState([]);
  const [beanListByCafe, setBeanListByCafe] = useState([]);

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
      <Container>
        <BeanList>
          {allBeanList &&
            allBeanList.map((bean) => (
              <BeanItem
                key={bean.no}
                no={bean.no}
                imgUrl={''}
                name={bean.name}
                cafe={bean.cafe}
              />
            ))}
          {/* <BeanItem no={1} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={2} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={3} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={4} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={5} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={6} imgUrl={''} name={'이름'} cafe={'카페'} /> */}
        </BeanList>
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  padding: 25px;
`;
