import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Hero';
import HeroTitle from 'components/HeroTitle';
import CatalogComponent from 'components/Catalog';

export default class Catalog extends Component {
  static async getInitialProps({ api }) {
    const products = await api.products.get({ count: 100 });
    return { products };
  }

  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <Hero small>
          <HeroTitle>
            Nuestros Productos
          </HeroTitle>
        </Hero>
        <CatalogComponent products={products} />
      </Fragment>
    );
  }
}
