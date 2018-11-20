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
  position: relative;
  display: inline-block;
  font-size: ${({ small }) => small ? sizes.nav.item.font.small : sizes.nav.item.font.big};
  font-weight: ${sizes.nav.item.weight};
  letter-spacing: ${sizes.nav.item.lspacing};
  color: ${({ active }) => active ? colors.nav_item.font.active : colors.nav_item.font.default};
  transition: ${transitions.nav_item};
  background: ${({ active }) => active ? colors.nav_item.bg.active : colors.nav_item.font.active.default};
  padding: ${sizes.nav.item.padding.mobile};
  width: ${sizes.nav.item.width.small};
  text-align: left;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${colors.nav_item.active};
  }
  ${media.md`
    width: ${sizes.nav.item.width.big};
    padding: ${({ small }) => small ? sizes.nav.item.padding.small : sizes.nav.item.padding.big};
    border-top: ${borders.nav_item};
    border-top-color: ${({ active }) => active ? colors.nav_item.font.active : 'transparent'};
    text-align: center;
    background: transparent;
  `}
`;
