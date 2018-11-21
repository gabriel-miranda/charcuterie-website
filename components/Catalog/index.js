import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/ProductCard';
import StyledCatalog from './styled';

const Catalog = ({ products }) => (
  <StyledCatalog>
    {(products).map(ProductCard)}
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
