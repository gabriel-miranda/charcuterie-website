import styled from 'styled-components';
import { media } from 'theme';

export default styled.div`
  width: 100%;
  margin: 0 auto;
  ${media.desktop`
    width: 1200px;
  `}
`;
