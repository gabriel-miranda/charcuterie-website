import React from 'react';
import PropTypes from 'prop-types';
import Title from './styled';

const HeroTitle = ({ children }) => (
  <Title>
    { children }
  </Title>
);

HeroTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroTitle;
