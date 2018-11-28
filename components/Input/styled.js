import styled from 'styled-components';
import {
  colors,
  sizes,
  borders,
  media,
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
  &[type="search"] {
    margin: 0 0 -25px;
    padding: 0 20px 0 45px;
    height: 40px;
    line-height: 40px;
    ${media.md`
      width: 300px;
      float: right;
    `}
  }
`;

export const StyledTextarea = StyledInput.withComponent('textarea');
