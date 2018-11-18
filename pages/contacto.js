import React, { Fragment } from 'react';
import Hero from 'components/Hero';
import HeroTitle from 'components/HeroTitle';
import ContactForm from 'components/ContactForm';

export default () => (
  <Fragment>
    <Hero small>
      <HeroTitle>
        Contacto
      </HeroTitle>
    </Hero>
    <ContactForm />
  </Fragment>
);
