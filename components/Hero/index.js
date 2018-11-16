import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHero,
  Content,
  Overlay,
} from './styled';

const Hero = ({ children }) => (
  <StyledHero>
    <Content>
      { children }
    </Content>
    <Overlay />
  </StyledHero>
);

Hero.propTypes = {
  children: PropTypes.node,
};

Hero.defaultProps = {
  children: null,
};

export default Hero;
