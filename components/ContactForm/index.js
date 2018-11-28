import React from 'react';
import PropTypes from 'prop-types';
import Input, { Textarea } from 'components/Input';
import Button from 'components/Button';
import StyledContactForm from './styled';

const ContactForm = ({ center }) => (
  <StyledContactForm center={center}>
    <Input type="text" placeholder="Nombre" />
    <Input type="email" placeholder="Email" />
    <Input type="phone" placeholder="Teléfono" />
    <Textarea placeholder="Mensaje" />
    <Button
      full
      solid
      type="button"
    >
      Enviar
    </Button>
  </StyledContactForm>
);

ContactForm.propTypes = {
  center: PropTypes.bool,
};

ContactForm.defaultProps = {
  center: true,
};

export default ContactForm;
