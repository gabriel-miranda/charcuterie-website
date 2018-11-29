import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/ProductCard';
import MapSearchOutlineIcon from 'mdi-react/MapSearchOutlineIcon';
import StyledCatalog, {
  CatalogContainer,
  CenterCatalog,
} from './styled';

const Catalog = ({ products }) => (
  <StyledCatalog>
    <CenterCatalog>
      <CatalogContainer>
        {products.length
          ? products.map(ProductCard)
          : (
            <div>
              <MapSearchOutlineIcon
                size={80}
              />
              <h4>
                No se han encontrado resultados <br />
                para su término de búsqueda
              </h4>
            </div>
          )
        }
      </CatalogContainer>
    </CenterCatalog>
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
