import styled from 'styled-components';
import {
  sizes,
  transitions,
  colors,
} from 'theme';

export default styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  left: ${({ open }) => open ? sizes.nav.mobile.left.open : sizes.nav.mobile.left.closed};
  padding: ${({ small }) => small ? sizes.nav.mobile.padding.small : sizes.nav.mobile.padding.big} 0 0;
  transition: ${transitions.nav_mobile};
  background: ${colors.nav.small};
`;
