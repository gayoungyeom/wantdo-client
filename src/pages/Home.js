import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import BeanList from '../components/BeanList';
import BeanItem from '../components/BeanItem';

const Home = () => {
  return (
    <Layout>
      <Container>
        <BeanList>
          <BeanItem no={1} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={2} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={3} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={4} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={5} imgUrl={''} name={'이름'} cafe={'카페'} />
          <BeanItem no={6} imgUrl={''} name={'이름'} cafe={'카페'} />
        </BeanList>
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  padding: 25px;
`;
