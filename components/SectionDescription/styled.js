import styled from 'styled-components';
import { sizes, colors } from 'theme';

export default styled.p`
  position: relative;
  z-index: 2;
  font-size: ${sizes.section.description.font};
  line-height: ${sizes.section.description.lheight};
  letter-spacing: ${sizes.section.description.lspacing};
  margin-bottom: ${({ light }) => light ? '50px' : sizes.section.description.margin};
  color: ${({ light }) => light ? '#fff' : colors.section.title}
`;
