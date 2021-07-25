import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Detail = ({ no }) => {
  return (
    <Layout>
      <Container>
        <TopInfo>
          <Image />
          <MainInfo>
            <Name>이름</Name>
            <Tastes>맛</Tastes>
            <Origins>원산지</Origins>
          </MainInfo>
        </TopInfo>
        <DetailInfo>세부정보</DetailInfo>
      </Container>
    </Layout>
  );
};

export default Detail;

const Container = styled.div`
  padding: 25px;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid #000;
`;

const Image = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  border-radius: 4px;
`;

const MainInfo = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border: 2px solid #000;
`;

const Name = styled.div``;

const Tastes = styled.div``;

const Origins = styled.div``;

const DetailInfo = styled.div`
  height: 400px;

  border: 2px solid #000;
`;
