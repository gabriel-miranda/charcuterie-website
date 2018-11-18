import React, { Fragment } from 'react';
import Hero from 'components/Hero';
import HeroTitle from 'components/HeroTitle';
import AboutUs from 'components/AboutUs';

export default () => (
  <Fragment>
    <Hero small>
      <HeroTitle>
        Acerca de Nosotros
      </HeroTitle>
    </Hero>
    <AboutUs />
  </Fragment>
);
