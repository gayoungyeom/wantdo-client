import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BeanList = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default BeanList;

BeanList.propTypes = {
  children: PropTypes.node.isRequired,
};

BeanList.defaultProps = {
  children: [],
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
