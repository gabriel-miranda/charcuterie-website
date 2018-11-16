import React from 'react';
import Button from 'components/Button';
import {
  Title,
  SubTitle,
} from './styled';
import Hero from './index';

export default () => (
  <Hero>
    <Title>
      <strong>Calidad</strong> en Fiambres
    </Title>
    <SubTitle>
      Más de 60 años de perfeccionamiento elaborando Fiambres que
      se destacan por su <strong>noble sabor y genuina calidad</strong>
    </SubTitle>
    <Button href="/contacto">
      Contactanos
    </Button>
  </Hero>
);
