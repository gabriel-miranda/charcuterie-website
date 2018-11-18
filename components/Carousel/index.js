import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'theme';
import Button from 'components/Button';
import Overlay from 'components/Overlay';
import ProductCard from 'components/ProductCard';
import StyledCarousel, { ProductContainer } from './styled';

const Carousel = ({ products }) => (
  <StyledCarousel>
    <Overlay>
      <ProductContainer>
        {Array(3).fill().map(ProductCard)}
      </ProductContainer>
      <Button
        small
        href="/productos"
        solid={false}
        theme={colors.button.transparent.font.white}
      >
        Ver más
      </Button>
    </Overlay>
  </StyledCarousel>
);

Carousel.propTypes = {
  products: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Carousel;
