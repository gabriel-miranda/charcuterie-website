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
      <CardThumbnail src="/static/jamon_cocido.jpg" />
    </ThumbnailContainer>
    <CardDetails>
      <CardTitle>
        {product.name}
      </CardTitle>
      <DescriptionContainer>
        <CardDescription uppercase>
          Cod {product.code}
        </CardDescription>
        <CardDescription>
          5kg./ 4U. x Caja
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
