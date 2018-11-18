import styled from 'styled-components';
import { media } from 'theme';

export default styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 50px 25px;
  max-width: 100%;
  width: 1440px;
  text-align: center;
  ${media.md`
    text-align: left;
    padding: 65px 50px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const StyledSectionBlock = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0;
  &:nth-last-of-type(1) {
    padding: 0;
  }
  ${media.md`
    text-align: ${({ center }) => center ? 'center' : 'left'};
    padding: 65px 50px;
    flex-direction: row;
    padding: 0 0 0 50px;
    &:nth-last-of-type(1) {
      padding: 0 0 0 50px;
    }
  `}
`;
