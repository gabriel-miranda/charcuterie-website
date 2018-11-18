import styled from 'styled-components';
import {
  sizes,
  media,
} from 'theme';

export default styled.h2`
  font-size: ${sizes.hero.title.font.small};
  font-weight: ${sizes.hero.title.weight};
  letter-spacing: ${sizes.hero.title.lspacing};
  ${media.sm`
    font-size: ${sizes.hero.title.font.big};
  `}
`;
