import styled from 'styled-components';
import {
  media,
} from 'theme';

export default styled.iframe`
  width: 100%;
  height: 350px;
  background: #eee;
  ${media.md`
    height: 545px;
  `}
`;
