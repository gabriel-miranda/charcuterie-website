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
  font-size: ${({ small }) => small ? '11px' : sizes.nav.item.font};
  font-weight: ${sizes.nav.item.weight};
  letter-spacing: ${sizes.nav.item.lspacing};
  color: ${({ active }) => active ? colors.nav_item.active : colors.nav_item.default};
  transition: ${transitions.nav_item};
  text-transform: uppercase;
  text-decoration: none;
  background: ${({ active }) => active ? 'rgba(255,255,255,.3)' : 'transparent'};
  padding: 20px 30px;
  width: 220px;
  text-align: left;
  &:hover {
    color: ${colors.nav_item.active};
  }
  ${media.md`
    background: transparent;
    width: ${sizes.nav.item.width};
    padding: ${({ small }) => small ? sizes.nav.item.padding.small : sizes.nav.item.padding.big};
    border-top: ${borders.nav_item};
    border-top-color: ${({ active }) => active ? colors.nav_item.active : 'transparent'};
    text-align: center;
  `}
`;
