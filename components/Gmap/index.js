import styled from 'styled-components';
import {
  media,
} from 'theme';

export default styled.iframe`
  width: 100%;
  height: 300px;
  ${media.md`
    height: 600px;
  `}
`;
