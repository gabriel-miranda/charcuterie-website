import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/ProductCard';
import StyledCatalog, { CatalogContainer } from './styled';

const Catalog = ({ products }) => (
  <StyledCatalog>
    <CatalogContainer>
      {(products).map(ProductCard)}
    </CatalogContainer>
  </StyledCatalog>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Catalog;
