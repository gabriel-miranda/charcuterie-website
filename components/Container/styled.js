import styled from 'styled-components';
import { media, sizes } from 'theme';

export default styled.div`
  width: 100%;
  margin: 0 auto;
  ${media.md`
    width: ${sizes.screen.desktop}px;
  `}
`;
