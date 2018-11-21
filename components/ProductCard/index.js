import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardThumbnail,
  CardDetails,
  CardTitle,
  CardDescription,
  ThumbnailContainer,
  DescriptionContainer,
} from './styled';

const ProductCard = product => (
  <CardContainer key={product.code}>
    <ThumbnailContainer>
      <CardThumbnail src={`${product.thumbnail}?h=340`} />
    </ThumbnailContainer>
    <CardDetails>
      <CardTitle>
        {product.name}
      </CardTitle>
      <DescriptionContainer>
        <CardDescription uppercase>
          Cod. {product.code}
        </CardDescription>
        <CardDescription>
          {product.units}
        </CardDescription>
      </DescriptionContainer>
    </CardDetails>
  </CardContainer>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
