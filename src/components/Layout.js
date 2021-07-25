import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Nav />
      {children}
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  children: [],
};

const Container = styled.div`
  border: 2px solid black;
`;
