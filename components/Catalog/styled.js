import styled from 'styled-components';
import { media } from 'theme';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 50px;
  ${media.md`
    flex-direction: row;
    padding: 0 50px 50px;
  `};
`;
