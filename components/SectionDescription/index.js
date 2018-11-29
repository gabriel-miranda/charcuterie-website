import React from 'react';
import PropTypes from 'prop-types';
import StyledDescription from './styled';

const SectionDescription = ({ children, light }) => (
  <StyledDescription light={light}>
    { children }
  </StyledDescription>
);


SectionDescription.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

SectionDescription.defaultProps = {
  light: false,
};

export default SectionDescription;
