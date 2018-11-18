import React from 'react';
import PropTypes from 'prop-types';
import Overlay from 'components/Overlay';
import { StyledHero } from './styled';

const Hero = ({ children }) => (
  <StyledHero>
    <Overlay>
      { children }
    </Overlay>
  </StyledHero>
);

Hero.propTypes = {
  children: PropTypes.node,
};

Hero.defaultProps = {
  children: null,
};

export default Hero;
