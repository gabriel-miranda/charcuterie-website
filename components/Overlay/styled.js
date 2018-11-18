import styled from 'styled-components';
import { positions, colors, zindex } from 'theme';

export default styled.div`
  ${positions.overlay}
  background: ${colors.overlay};
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zindex.hero_content};
`;
