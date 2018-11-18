import React from 'react';
import PropTypes from 'prop-types';
import Overlay from 'components/Overlay';
import StyledCarousel from './styled';

const Carousel = ({ children }) => (
  <StyledCarousel>
    <Overlay>
      { children }
    </Overlay>
  </StyledCarousel>
);

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
