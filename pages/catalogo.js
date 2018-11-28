import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import Hero from 'components/Hero';
import CatalogComponent from 'components/Catalog';
import Section, { SectionBlock } from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import SectionDescription from 'components/SectionDescription';
import Input from 'components/Input';
import SearchContainer from 'components/SearchContainer';

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

  state = {
    search: '',
  }

  onSearchChange = ({ target: { value: search } }) => {
    this.setState({ search });
  }

  sanitize = str => str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  filter = ({ name }) => {
    const { search } = this.state;
    const term = this.sanitize(search.trim());
    return this.sanitize(name).includes(term);
  }

  render() {
    const { products } = this.props;
    const { search } = this.state;
    return (
      <Fragment>
        <Hero small />
        <Section>
          <SectionBlock>
            <SectionTitle>
              Nuestros productos
            </SectionTitle>
            <SectionDescription>
              Desde Esperanza, cuna del trabajo nuestros productos respetan una receta con
              más de 60 años de perfeccionamiento, elaborando Fiambres que se destacan por
              su <em>noble sabor y genuina calidad.</em>
            </SectionDescription>
            <SearchContainer>
              <MagnifyIcon
                size={25}
                color="#009f3c"
              />
              <Input
                value={search}
                placeholder="Buscar"
                type="search"
                onChange={this.onSearchChange}
              />
            </SearchContainer>
          </SectionBlock>
        </Section>
        <CatalogComponent
          products={products.filter(this.filter)}
        />
      </Fragment>
    );
  }
}
