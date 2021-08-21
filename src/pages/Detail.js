import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getData } from '../utils/http';

import Layout from '../components/Layout';
import RoastingStage from '../components/RoastingStage';
import { main, sub, text } from '../utils/color';
import DefaultBean from '../assets/defaultBean.jpg';
import TasteIcon from '../assets/taste.svg';
import TypeIcon from '../assets/type.svg';
import OriginIcon from '../assets/origin.svg';
import RoastingIcon from '../assets/roasting.svg';
import DescriptionIcon from '../assets/description.svg';
import InfoIcon from '../assets/info.svg';

const Detail = ({ match }) => {
  const no = match.params.no;
  const [bean, setBean] = useState({});
  const [tastes, setTastes] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [isClickInfo, setIsClickInfo] = useState(false);

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

  const RoastingInfo = useCallback(() => {
    setIsClickInfo(!isClickInfo);
  }, [isClickInfo]);

  return (
    <Layout>
      <Container>
        <TopInfo>
          <ImgWrap>
            <Image imgUrl={bean.image || DefaultBean} />
          </ImgWrap>
          <MainInfo>
            <NameConatiner>
              <Name>
                {bean.name} / {bean.cafe}
              </Name>
              {/* <More>해당 원두 정보 링크</More> */}
            </NameConatiner>
            <TasteContainer>
              <LabelWrap>
                <Icon icon={TasteIcon} />
                <Label>Tastes</Label>
              </LabelWrap>
              {tastes &&
                tastes.map((taste) => <Tastes key={taste.no}>{taste}</Tastes>)}
            </TasteContainer>
            <Wrap>
              <TypeContainer>
                <LabelWrap>
                  <Icon icon={TypeIcon} />
                  <Label>Type</Label>
                </LabelWrap>
                <Type>{bean.type} </Type>
              </TypeContainer>
              <OriginContainer>
                <LabelWrap>
                  <Icon icon={OriginIcon} />
                  <Label>Origins</Label>
                </LabelWrap>
                {origins &&
                  origins.map((origin) => (
                    <Origins key={origin.no}>{origin}</Origins>
                  ))}
              </OriginContainer>
            </Wrap>
          </MainInfo>
        </TopInfo>
        <DetailInfo>
          <RoastingContainer>
            <LabelWrap>
              <Icon icon={RoastingIcon} />
              <DetailLabel>Roasting Point</DetailLabel>
              <Info onClick={RoastingInfo} />
            </LabelWrap>
            {isClickInfo && (
              <ShowInfo>
                약배전에서 강배전으로 갈수록 "😆신맛 - 😋단맛 - 😣쓴맛"으로 맛이
                변화합니다.
              </ShowInfo>
            )}
            <RoastingStage curItem={bean.roasting} isClickInfo={isClickInfo} />
          </RoastingContainer>
          <DescriptionContainer>
            <LabelWrap>
              <Icon icon={DescriptionIcon} />
              <DetailLabel>Detail</DetailLabel>
            </LabelWrap>
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
  color: ${main};
  background: ${sub};
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    display: block;
  }
`;

const ImgWrap = styled.div`
  width: 45%;
  height: 400px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Image = styled.div`
  background: url(${(props) => props.imgUrl}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const MainInfo = styled.div`
  width: 45%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  opacity: 0.7;
`;

const Label = styled.div`
  margin-left: 5px;
`;

const Icon = styled.div`
  background: url(${(props) => props.icon}) no-repeat center;
  width: 18px;
  height: 18px;
`;

const NameConatiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const More = styled(Link)``;

const TasteContainer = styled.div``;

const Tastes = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeContainer = styled.div``;

const Type = styled.div`
  font-size: 18px;
  padding: 10px;
`;

const OriginContainer = styled.div``;

const Origins = styled.div`
  font-size: 18px;
  padding: 10px;
`;

const DetailInfo = styled.div`
  height: 100%;
  padding: 20px 8%;
`;

const DetailLabel = styled.div`
  padding: 15px 0;
  margin-left: 5px;
`;

const RoastingContainer = styled.div`
  position: relative;
`;

const DescriptionContainer = styled.div`
  margin-top: 25px;
`;

const Description = styled.div`
  line-height: 26px;
`;

const Info = styled.button`
  background: url(${InfoIcon}) no-repeat center;
  width: 14px;
  height: 14px;
  opacity: 0.7;
  padding: 10px;
  margin-left: 5px;
  border: none;
  cursor: pointer;
`;

const ShowInfo = styled.div`
  background: ${sub};
  color: ${main};
  padding: 10px;
  border: 1px solid ${main};
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5rem;
  max-width: 65%;
  position: absolute;
  top: 23px;
  left: 146px;
  z-index: 99;
  @media (max-width: 600px) {
    min-width: 230px;
    top: 30px;
    left: 20%;
  }
`;
