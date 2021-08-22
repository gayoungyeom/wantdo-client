import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Text>출처</Text>
      <Item>스타벅스 코리아</Item>
      <Item>투썸플레이스</Item>
      <Item>이디야커피</Item>
      <Item>폴 바셋</Item>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #000;
  @media (max-width: 560px) {
    padding: 0 10px;
  }
`;

const Text = styled.div`
  font-size: 16px;
  padding: 0 1rem;
  @media (max-width: 560px) {
    font-size: 14px;
    padding: 0 0.5rem;
  }
`;

const Item = styled.div`
  font-size: 12px;
  padding: 0 1rem;
  @media (max-width: 560px) {
    font-size: 10px;
    padding: 0 0.5rem;
  }
`;
