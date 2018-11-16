import styled from 'styled-components';
import {
  sizes,
  images,
  colors,
  positions,
  zindex,
} from 'theme';

export const StyledHero = styled.div`
  position: relative;
  text-align: center;
  background-size: cover;
  padding: ${sizes.hero.padding};
  background: url(${images.hero.background}) no-repeat center center;
  color: ${colors.hero.text};
  background-size: cover;
`;

export const Overlay = styled.div`
  ${positions.overlay}
  background: ${colors.overlay};
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zindex.hero_content};
`;

export const Title = styled.h2`
  font-size: ${sizes.hero.title.font};
  font-weight: ${sizes.hero.title.weight};
  letter-spacing: ${sizes.hero.title.lspacing};
`;

export const SubTitle = styled.p`
  margin: 0 auto;
  max-width: 100%;
  width: ${sizes.hero.subtitle.width};
  margin-bottom: ${sizes.hero.subtitle.margin_bottom};
  font-size: ${sizes.hero.subtitle.font};
  letter-spacing: ${sizes.hero.subtitle.lspacing};
  line-height: ${sizes.hero.subtitle.line_height};
`;
