import React from 'react';
import { StyledInput, StyledTextarea } from './styled';

const Input = props => (
  <StyledInput {...props} />
);

export const Textarea = props => (
  <StyledTextarea {...props} />
);

export default Input;
