import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Section, { SectionBlock } from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import SectionDescription from 'components/SectionDescription';
import Button from 'components/Button';
import { AboutUsImg, AboutTheCompanyImg } from './styled';

const AboutTheCompany = () => [
  <Section key="section">
    <SectionBlock center>
      <SectionTitle>
        Sobre la empresa
      </SectionTitle>
      <SectionDescription>
        Desde Esperanza, cuna del trabajo nuestros productos respetan
        una receta con más de 60 años de perfeccionamiento, elaborando
        Fiambres que se destacan por su <em>noble sabor y genuina calidad</em>.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </SectionDescription>
    </SectionBlock>
  </Section>,
  <AboutTheCompanyImg key="company" />,
  <Section key="section-final">
    <SectionBlock center>
      <SectionDescription>
        Desde Esperanza, cuna del trabajo nuestros productos respetan
        una receta con más de 60 años de perfeccionamiento, elaborando
        Fiambres que se destacan por su <em>noble sabor y genuina calidad</em>.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </SectionDescription>
    </SectionBlock>
  </Section>,
];

const AboutUs = ({ readmore, full }) => (
  <Fragment>
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
        {readmore && (
          <Button
            href="/nosotros"
            solid={false}
            small
          >
            Leer más
          </Button>
        )}
      </SectionBlock>
      <SectionBlock>
        <AboutUsImg src="/static/nosotros.jpg" alt="Fiambres" />
      </SectionBlock>
    </Section>
    { full && <AboutTheCompany /> }
  </Fragment>
);

AboutUs.propTypes = {
  readmore: PropTypes.bool,
  full: PropTypes.bool,
};

AboutUs.defaultProps = {
  readmore: true,
  full: true,
};

export default AboutUs;
