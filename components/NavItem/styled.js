import styled from 'styled-components';
import {
  colors,
  sizes,
  transitions,
  borders,
  media,
} from 'theme';

export const ListItem = styled.li`
`;

export const StyledLink = styled.a`
  display: none;
  position: relative;
  width: ${sizes.nav.item.width};
  padding: ${({ small }) => small ? sizes.nav.item.padding.small : sizes.nav.item.padding.big};
  font-size: ${sizes.nav.item.font};
  font-weight: ${sizes.nav.item.weight};
  letter-spacing: ${sizes.nav.item.lspacing};
  color: ${({ active }) => active ? colors.nav_item.active : colors.nav_item.default};
  transition: ${transitions.nav_item};
  border-top: ${borders.nav_item};
  border-top-color: ${({ active }) => active ? colors.nav_item.active : 'transparent'};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${colors.nav_item.active};
  }
  ${media.md`
    display: inline-block;
  `}
`;
