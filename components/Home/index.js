import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Hero/Home';
import AboutUs from 'components/AboutUs';
import Carousel from 'components/Carousel';
import SectionTitle from 'components/SectionTitle';
import Section, { SectionBlock } from 'components/Section';
import SectionDescription from 'components/SectionDescription';
import ContactForm from 'components/ContactForm';

const Home = ({ products }) => (
  <Fragment>
    <Hero />
    <AboutUs />
    <Carousel products={products} />
    <Section small center>
      <SectionBlock>
        <SectionTitle>
          Contacto
        </SectionTitle>
        <SectionDescription>
          Fiambres que se destacan por su <em>noble sabor y genuina calidad</em>. <br />
          Lorem ipsum dolor sit amet
        </SectionDescription>
        <ContactForm />
      </SectionBlock>
    </Section>
  </Fragment>
);

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
