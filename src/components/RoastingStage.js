import React from 'react';
import styled from 'styled-components';
import { main, sub } from '../utils/color';

const RoastingStage = ({ curItem, isClickInfo }) => {
  return (
    <Container isClickInfo={isClickInfo}>
      <Wrap>
        <Item current={curItem === '라이트'}>라이트</Item>
        <Item current={curItem === '시나몬'}>시나몬</Item>
        <Item current={curItem === '미디엄'}>미디엄</Item>
        <Item current={curItem === '하이'}>하이</Item>
        <Item current={curItem === '시티'}>시티</Item>
        <Item current={curItem === '풀시티'}>풀시티</Item>
        <Item current={curItem === '프렌치'}>프렌치</Item>
        <Item current={curItem === '이탈리안'}>이탈리안</Item>
      </Wrap>
      <Stage>
        <StageItem>{'← 약배전'}</StageItem>
        <StageItem>{'강배전 →'}</StageItem>
      </Stage>
    </Container>
  );
};

export default RoastingStage;

const Container = styled.div`
  opacity: ${(props) => props.isClickInfo && 0.5};
`;

const Wrap = styled.div`
  border: 2px solid ${main};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  border-right: 2px solid ${main};
  padding: 10px;
  width: 12.5%;
  text-align: center;
  color: ${main};
  color: ${(props) => props.current && sub};
  background: ${(props) => props.current && main};
  opacity: ${(props) => !props.current && 0.7};
  :last-child {
    border: none;
  }
`;

const Stage = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;

const StageItem = styled.div`
  color: ${main};
`;
