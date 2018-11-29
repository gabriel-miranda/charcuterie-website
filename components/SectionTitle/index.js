import React from 'react';
import PropTypes from 'prop-types';
import Title from './styled';

const SectionTitle = ({ children, light }) => (
  <Title light={light}>
    { children }
  </Title>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

SectionTitle.defaultProps = {
  light: false,
};

export default SectionTitle;
