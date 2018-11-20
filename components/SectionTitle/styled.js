import styled from 'styled-components';
import {
  sizes,
  colors,
} from 'theme';

export default styled.h2`
  position: relative;
  display: inline-block;
  font-size: ${sizes.section.title.font};
  padding: ${sizes.section.title.padding};
  margin: ${sizes.section.title.padding};
  font-weight: ${sizes.section.title.weight};
  letter-spacing: ${sizes.section.title.lspacing};
  text-transform: uppercase;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${sizes.section.title.border.height};
    width: ${sizes.section.title.border.width};
    background: ${colors.section.title};
  }
`;
