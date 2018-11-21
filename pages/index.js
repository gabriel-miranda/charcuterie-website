import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeComponent from 'components/Home';

export default class Home extends Component {
  static async getInitialProps({ api }) {
    const products = await api.products.get({ count: 3 });
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
      <HomeComponent products={products} />
    );
  }
}
