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
  padding: ${({ small }) => small ? '210px 50px 50px' : sizes.hero.padding.small};
  background: url(${images.hero.background}) no-repeat center center;
  background-attachment: fixed;
  color: ${colors.hero.text};
  background-size: cover;
  margin: ${({ small }) => small ? '0 0 50px 0' : '0'};
  ${media.md`
    padding: ${({ small }) => small ? '210px 50px 50px' : sizes.hero.padding.big};
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
