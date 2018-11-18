import React from 'react';
import Section, { SectionBlock } from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import SectionDescription from 'components/SectionDescription';
import Button from 'components/Button';

export default () => (
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
);
