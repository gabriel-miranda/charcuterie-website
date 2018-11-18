import React, { Fragment } from 'react';
import Hero from 'components/Hero/Home';
import Section, { SectionBlock } from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import SectionDescription from 'components/SectionDescription';
import Button from 'components/Button';
import { colors } from 'theme';

export default () => (
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
        >
          Leer más
        </Button>
      </SectionBlock>
      <SectionBlock>
        <img src="/static/nosotros.jpg" alt="Fiambres" />
      </SectionBlock>
    </Section>
    <Section>
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
  </Fragment>
);
