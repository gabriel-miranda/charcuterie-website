import React from 'react';
import Input, { Textarea } from 'components/Input';
import Button from 'components/Button';
import ContactForm from './styled';

export default () => (
  <ContactForm>
    <Input type="text" placeholder="Nombre" />
    <Input type="email" placeholder="Email" />
    <Input type="phone" placeholder="Teléfono" />
    <Textarea placeholder="Mensaje" />
    <Button
      full
      solid
    >
      Enviar
    </Button>
  </ContactForm>
);
