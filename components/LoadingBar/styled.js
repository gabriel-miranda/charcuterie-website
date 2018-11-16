import styled from 'styled-components';
import {
  sizes,
  positions,
  colors,
  transitions,
  zindex,
} from 'theme';

export default styled.div`
  ${positions.loading_bar}
  background: ${colors.loading_bar};
  height: ${sizes.loading_bar};
  transition: ${transitions.loading_bar};
  z-index: ${zindex.loading_bar};
`;
