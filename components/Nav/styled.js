import styled from 'styled-components';
import {
  sizes,
  borders,
  positions,
  zindex,
  transitions,
  colors,
} from 'theme';

export const SubHeader = styled.div`
  ${positions.subheader}
  width: ${sizes.subheader.width};
  height: ${sizes.subheader.height};
  z-index: ${zindex.subheader};
  border-bottom: ${borders.subheader};
`;

export const NavList = styled.nav`
  ${({ small }) => small ? positions.nav_fixed : positions.nav}
  background-color: ${({ small }) => small ? colors.nav.small : colors.nav.big};
  transition: ${transitions.nav};
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

export const WaypointContainer = styled.div`
  ${positions.waypoint}
`;
