import React from 'react';
import PropTypes from 'prop-types';
import StyledOverlay, { Content } from './styled';

const Overlay = ({ children }) => [
  <Content key="content">
    { children }
  </Content>,
  <StyledOverlay key="overlay" />,
];

Overlay.propTypes = {
  children: PropTypes.node,
};

export default Overlay;
