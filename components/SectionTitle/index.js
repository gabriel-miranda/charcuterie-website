import React from 'react';
import PropTypes from 'prop-types';
import Title from './styled';

const SectionTitle = ({ children }) => (
  <Title>
    { children }
  </Title>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
