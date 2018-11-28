import styled from 'styled-components';
import {
  sizes,
  images,
  colors,
  media,
} from 'theme';

export const StyledHero = styled.div`
  position: relative;
  text-align: center;
  background-size: cover;
  padding: ${({ small }) => small ? sizes.hero.padding.props_small.small : sizes.hero.padding.small};
  background: url(${images.hero.background}) no-repeat center center;
  color: ${colors.hero.text};
  background-attachment: fixed;
  background-size: cover;
  ${media.md`
    padding: ${({ small }) => small ? sizes.hero.padding.props_small.big : sizes.hero.padding.big};
  `}
`;

export const SubTitle = styled.p`
  margin: 0 auto;
  max-width: 100%;
  width: ${sizes.hero.subtitle.width};
  margin-bottom: ${sizes.hero.subtitle.margin_bottom};
  font-size: ${sizes.hero.subtitle.font.small};
  letter-spacing: ${sizes.hero.subtitle.lspacing};
  line-height: ${sizes.hero.subtitle.line_height};
  ${media.sm`
    font-size: ${sizes.hero.subtitle.font.big};
  `}
`;
