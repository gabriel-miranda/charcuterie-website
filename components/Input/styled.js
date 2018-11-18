import styled from 'styled-components';
import { colors } from 'theme';

export const StyledInput = styled.input`
  width: 100%;
  line-height: 50px;
  padding: 0 20px;
  color: ${colors.input};
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 30px;
  &:focus {
    outline: none;
  }
`;

export const StyledTextarea = StyledInput.withComponent('textarea');
