import styled from 'styled-components';
import {
  sizes,
  borders,
  positions,
  zindex,
} from 'theme';

export const SubHeader = styled.div`
  width: 100%;
  height: ${sizes.subheader.height};
  border-bottom: ${borders.subheader};
`;

export const NavList = styled.nav`
  ${positions.nav}
  z-index: ${zindex.nav};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  width: ${sizes.nav.list.width};
  max-width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
