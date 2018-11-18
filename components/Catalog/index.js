import React from 'react';
import ProductCard from 'components/ProductCard';
import StyledCatalog from './styled';

export default () => (
  <StyledCatalog>
    {Array(12).fill().map(ProductCard)}
  </StyledCatalog>
);
