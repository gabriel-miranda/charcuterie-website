import React, { Fragment } from 'react';
import Hero from 'components/Hero';
import HeroTitle from 'components/HeroTitle';
import Catalog from 'components/Catalog';

export default () => (
  <Fragment>
    <Hero small>
      <HeroTitle>
        Nuestros Productos
      </HeroTitle>
    </Hero>
    <Catalog />
  </Fragment>
);
