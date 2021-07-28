import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData } from '../utils/http';

import Layout from '../components/Layout';
import DefaultBean from '../assets/defaultBean.jpg';

const Detail = ({ match }) => {
  const no = match.params.no;
  const [bean, setBean] = useState({});
  const [tastes, setTastes] = useState([]);
  const [origins, setOrigins] = useState([]);

  const getBean = useCallback(() => {
    getData(`/bean/getbean?bean_no=${no}`, (res) => {
      setBean(res.results);
      setTastes(res.results.tastes);
      setOrigins(res.results.origins);
    });
  }, [no]);

  useEffect(() => {
    getBean();
  }, [getBean]);

  return (
    <Layout>
      <Container>
        <TopInfo>
          <Image />
          <MainInfo>
            <NameConatiner>
              <Name>{bean.name}</Name>
            </NameConatiner>
            <TasteContainer>
              <Label>Tastes</Label>
              {tastes && tastes.map((taste) => <Tastes>{taste}</Tastes>)}
            </TasteContainer>
            <OriginContainer>
              <Label>Origins</Label>
              {origins && origins.map((origin) => <Origins>{origin}</Origins>)}
            </OriginContainer>
          </MainInfo>
        </TopInfo>
        <DetailInfo>
          <RoastingContainer>
            <DetailLabel>Roasting Point</DetailLabel>
            <Roasting>{bean.roasting}</Roasting>
          </RoastingContainer>
          <DescriptionContainer>
            <DetailLabel>Detail</DetailLabel>
            <Description>{bean.description}</Description>
          </DescriptionContainer>
        </DetailInfo>
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
  background: url(${DefaultBean}) no-repeat center;
  background-size: cover;
  width: 400px;
  height: 400px;
  border-radius: 4px;
`;

const MainInfo = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  /* border: 2px solid #000; */
`;

const Label = styled.div``;

const NameConatiner = styled.div``;
const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TasteContainer = styled.div``;
const Tastes = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const OriginContainer = styled.div``;
const Origins = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const DetailInfo = styled.div`
  height: 400px;
  padding: 25px;
  border: 2px solid #000;
`;

const DetailLabel = styled.div`
  padding: 15px 0;
`;

const RoastingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Roasting = styled.div``;

const DescriptionContainer = styled.div`
  padding-top: 25px;
`;
const Description = styled.div``;
