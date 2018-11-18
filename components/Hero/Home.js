import React from 'react';
import Button from 'components/Button';
import HeroTitle from 'components/HeroTitle';
import { SubTitle } from './styled';
import Hero from './index';

export default () => (
  <Hero>
    <HeroTitle>
      <strong>Calidad</strong> en Fiambres
    </HeroTitle>
    <SubTitle>
      Más de 60 años de perfeccionamiento elaborando Fiambres que
      se destacan por su <strong>noble sabor y genuina calidad</strong>
    </SubTitle>
    <Button href="/contacto">
      Contactanos
    </Button>
  </Hero>
);
