import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DefaultBean from '../assets/defaultBean.jpg';
import { main, sub, text } from '../utils/color';

const BeanItem = ({ no, imgUrl, name, cafe }) => {
  return (
    <Link to={`/detail/${no}`}>
      <Container>
        <Image bgUrl={imgUrl || DefaultBean} />
        <Name>{name}</Name>
        <Cafe>{cafe}</Cafe>
      </Container>
    </Link>
  );
};

export default BeanItem;

BeanItem.propTypes = {
  no: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  cafe: PropTypes.string.isRequired,
};

BeanItem.defaultProps = {
  no: 0,
  imgUrl: ``,
  name: ``,
  cafe: ``,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 262.5px;
  height: 346.5px;
  color: ${text};
  background: ${sub};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Image = styled.div`
  width: 95%;
  height: 260px;
  margin-top: 5px;
  background: url(${(props) => props.bgUrl}) no-repeat center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* border-radius: 100%; */
`;

const Name = styled.div`
  width: inherit;
  height: 42px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  margin-top: 5px;
`;

const Cafe = styled.div`
  width: inherit;
  height: 42px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;
