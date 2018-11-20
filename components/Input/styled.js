import styled from 'styled-components';
import {
  colors,
  sizes,
  borders,
} from 'theme';

export const StyledInput = styled.input`
  width: ${sizes.input.width};
  line-height: ${sizes.input.lheight};
  padding: ${sizes.input.padding};
  color: ${colors.input};
  border: ${borders.input};
  border-radius: ${sizes.input.radius};
  margin-bottom: ${sizes.input.margin_bottom};
  &:focus {
    outline: none;
  }
`;

export const StyledTextarea = StyledInput.withComponent('textarea');
