import React from 'react';
import PropTypes from 'prop-types';
import StyledDescription from './styled';

const SectionDescription = ({ children }) => (
  <StyledDescription>
    { children }
  </StyledDescription>
);


SectionDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionDescription;
