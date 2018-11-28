import React, { Fragment } from 'react';
import Hero from 'components/Hero';
import ContactForm from 'components/ContactForm';
import Section, { SectionBlock } from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import SectionDescription from 'components/SectionDescription';
import Gmap from 'components/Gmap';

export default () => (
  <Fragment>
    <Hero small />
    <Section>
      <SectionBlock>
        <SectionTitle>
          Contacto
        </SectionTitle>
        <SectionDescription>
          Fiambres que se destacan por su <em>noble sabor y genuina calidad</em>. <br />
          Lorem ipsum dolor sit amet
        </SectionDescription>
        <ContactForm center={false} />
      </SectionBlock>
      <SectionBlock>
        <SectionTitle>
          Dirección
        </SectionTitle>
        <SectionDescription>
          Rodríguez Peña 2347 <br />
          Esperanza, Santa Fe
        </SectionDescription>
        <Gmap
          title="Las 4b Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.7786211650937!2d-60.92771528538802!3d-31.447760981393664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b513172f6f1e07%3A0xc3de51d0cb88ef2a!2sRodr%C3%ADguez+Pe%C3%B1a+2347%2C+S3080IAG+Esperanza%2C+Santa+Fe!5e0!3m2!1ses-419!2sar!4v1543394941279"
          frameBorder="0"
          allowFullScreen
        />
      </SectionBlock>
    </Section>
  </Fragment>
);
