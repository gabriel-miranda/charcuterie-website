import styled from 'styled-components';
import {
  colors,
  sizes,
  borders,
  media,
} from 'theme';

function getTextColor({ theme, solid }) {
  if (solid) {
    return colors.button.solid.font;
  }
  return theme || colors.button.solid.font;
}

function getBackgroundColor(color) {
  return function getColor({ solid }) {
    return solid ? color : colors.button.transparent.bg;
  };
}

function getPadding({ small }) {
  if (small) {
    return `${sizes.button.padding.small} 2.5em`;
  }
  return `${sizes.button.padding.small} ${sizes.button.padding.big}`;
}

export const StyledLink = styled.a`
  display: inline-block;
  background: ${getBackgroundColor(colors.button.solid.bg)};
  font-size: ${sizes.button.font};
  width: ${({ full }) => full ? sizes.button.full : 'initial'};
  color: ${getTextColor};
  border: ${({ solid }) => solid ? 'none' : borders.button};
  padding: ${sizes.button.padding.small} 2.5em;
  border-radius: ${sizes.button.radius};
  letter-spacing: ${sizes.button.lspacing};
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: ${getBackgroundColor(colors.button.solid.bg_light)}
  }
  &:active {
    background: ${getBackgroundColor(colors.button.solid.bg_dark)}
  }
  ${media.sm`
    padding: ${getPadding};
  `}
`;

export const StyledButton = StyledLink.withComponent('button');
