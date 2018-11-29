import styled from 'styled-components';
import {
  sizes,
  borders,
  positions,
  zindex,
  transitions,
  colors,
  media,
} from 'theme';

export const SubHeader = styled.div`
  ${positions.subheader}
  width: ${sizes.subheader.width};
  height: ${sizes.subheader.height};
  z-index: ${zindex.subheader};
  border-bottom: ${borders.subheader};
`;

export const SubHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 25px;
  ${media.md`
    padding: 0 50px;
  `}
  a {
    display: flex;
    align-items: center;
  }
`;

export const SubHeaderLeft = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  ${media.md`
    display: flex;
  `}
`;

export const SubHeaderText = styled.p`
  color: #fff;
  padding: 0 1.5em;
  font-size: ${sizes.subfooter.font};
  line-height: ${sizes.subfooter.lheight};
  letter-spacing: ${sizes.subfooter.lspacing};
  margin: 0;
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
  display: none;
  align-items: center;
  justify-content: space-around;
  ${media.md`
    display: flex;
  `}
`;

export const ListMobile = styled.ul`
  width: ${sizes.nav.list.width};
  max-width: 100%;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  display: flex;
  ${media.md`
    display: none;
  `}
`;

export const WaypointContainer = styled.div`
  ${positions.waypoint}
`;
