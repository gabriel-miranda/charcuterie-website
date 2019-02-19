import styled from 'styled-components';
import {
  media,
} from 'theme';

export default styled.img`
  margin: 50px auto 0;
  ${media.md`
    position: absolute;
    left: 50px;
    top: -65px;
    max-width: none;
    width: 960px;
    margin: 0;
  `}
`;
