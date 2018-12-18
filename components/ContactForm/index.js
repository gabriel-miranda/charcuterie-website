import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { Textarea } from 'components/Input';
import Button from 'components/Button';
import SendIcon from 'mdi-react/SendIcon';
import LoadingIcon from 'mdi-react/LoadingIcon';
import CheckIcon from 'mdi-react/CheckboxMarkedCircleOutlineIcon';
import axios from 'axios';
import StyledContactForm, {
  Icon,
  InnerButton,
} from './styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  message: '',
  loading: false,
  sent: false,
};

function msg({ loading, sent }) {
  switch (true) {
    case (loading):
      return [<Icon as={LoadingIcon} spin key="icon" />, 'Enviando...'];
    case (sent):
      return [<Icon as={CheckIcon} key="icon" />, 'Mensaje enviado!'];
    default:
      return [<Icon as={SendIcon} key="icon" />, 'Enviar'];
  }
}

class ContactForm extends Component {
  state = INITIAL_STATE;

  send = (e) => {
    e.persist();
    const { loading } = this.state;
    if (loading) {
      return;
    }
    this.setState({ loading: true }, async () => {
      e.preventDefault();
      this.loading = true;
      await axios.post('/api/email', this.state);
      this.setState(INITIAL_STATE, this.handleSent);
    });
  }

  handleSent = () => {
    this.setState({ sent: true }, () => {
      setTimeout(() => this.setState({ sent: false }), 2000);
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { center } = this.props;
    const {
      name,
      email,
      phone,
      message,
      loading,
      sent,
    } = this.state;
    return (
      <StyledContactForm center={center} onSubmit={this.send}>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={this.handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
          value={email}
          required
        />
        <Input
          type="phone"
          name="phone"
          placeholder="Teléfono"
          onChange={this.handleChange}
          value={phone}
        />
        <Textarea
          placeholder="Mensaje"
          name="message"
          value={message}
          onChange={this.handleChange}
          required
        />
        <Button
          full
          solid
          type="button"
        >
          <InnerButton>
            {msg({ loading, sent })}
          </InnerButton>
        </Button>
      </StyledContactForm>
    );
  }
}

ContactForm.propTypes = {
  center: PropTypes.bool,
};

ContactForm.defaultProps = {
  center: true,
};

export default ContactForm;
