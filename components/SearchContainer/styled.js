import styled from 'styled-components';
import {
  media,
} from 'theme';

export default styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    top: 8px;
  }
  ${media.md`
    float: right;
  `}
`;
