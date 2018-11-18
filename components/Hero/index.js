import React from 'react';
import PropTypes from 'prop-types';
import Overlay from 'components/Overlay';
import { StyledHero } from './styled';

const Hero = ({ children, small }) => (
  <StyledHero small={small}>
    <Overlay>
      { children }
    </Overlay>
  </StyledHero>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};

Hero.defaultProps = {
  small: false,
};

export default Hero;
