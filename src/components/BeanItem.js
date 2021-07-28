import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DefaultBean from '../assets/defaultBean.jpg';

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
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;

const Image = styled.div`
  width: 100%;
  height: 262.5px;
  background: url(${(props) => props.bgUrl}) no-repeat center;
  background-size: cover;
`;

const Name = styled.div`
  width: inherit;
  height: 42px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const Cafe = styled.div`
  width: inherit;
  height: 42px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;
