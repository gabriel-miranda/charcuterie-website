import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Hero/Home';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import SectionTitle from 'components/SectionTitle';
import Section, { SectionBlock } from 'components/Section';
import SectionDescription from 'components/SectionDescription';
import { colors } from 'theme';

const Home = ({ products }) => (
  <Fragment>
    <Hero />
    <Section>
      <SectionBlock>
        <SectionTitle>
          Sobre nosotros
        </SectionTitle>
        <SectionDescription>
          Desde Esperanza, cuna del trabajo nuestros productos respetan
          una receta con más de 60 años de perfeccionamiento, elaborando
          Fiambres que se destacan por su <em>noble sabor y genuina calidad</em>.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna
        </SectionDescription>
        <Button
          href="/nosotros"
          theme={colors.button.transparent.font.green}
          solid={false}
          small
        >
          Leer más
        </Button>
      </SectionBlock>
      <SectionBlock>
        <img src="/static/nosotros.jpg" alt="Fiambres" />
      </SectionBlock>
    </Section>
    <Section small>
      <SectionBlock center>
        <SectionTitle>
          Nuestros productos
        </SectionTitle>
        <SectionDescription>
          Fiambres que se destacan por su <em>noble sabor y genuina calidad</em>. <br />
          Lorem ipsum dolor sit amet
        </SectionDescription>
      </SectionBlock>
    </Section>
    <Carousel>

    </Carousel>
  </Fragment>
);

Home.propTypes = {
  products: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
