import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'theme';
import Button from 'components/Button';
import Overlay from 'components/Overlay';
import ProductCard from 'components/ProductCard';
import SectionTitle from 'components/SectionTitle';
import SectionDescription from 'components/SectionDescription';
import StyledCarousel, { ProductContainer } from './styled';

const Carousel = ({ products }) => (
  <StyledCarousel>
    <SectionTitle light>
      Nuestros productos
    </SectionTitle>
    <SectionDescription light>
      Fiambres que se destacan por su noble sabor y genuina calidad. <br />
      Lorem ipsum dolor sit amet
    </SectionDescription>
    <Overlay>
      <ProductContainer>
        {products.map(ProductCard)}
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Carousel;
