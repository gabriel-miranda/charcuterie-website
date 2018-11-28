import React, { Fragment } from 'react';
import Hero from 'components/Hero';
import AboutUs from 'components/AboutUs';

export default () => (
  <Fragment>
    <Hero small />
    <AboutUs readmore={false} />
  </Fragment>
);
