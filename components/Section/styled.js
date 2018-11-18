import styled from 'styled-components';
import { media } from 'theme';

export default styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background: #fff;
  padding: ${({ small }) => small ? '50px 25px 0 25px' : '50px 25px'};
  max-width: 100%;
  width: 1440px;
  text-align: center;
  ${media.md`
    text-align: left;
    padding: ${({ small }) => small ? '65px 50px 0 50px' : '65px 50px'};
    flex-direction: row;
    align-items: center;
  `}
`;

export const StyledSectionBlock = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0;
  ${media.md`
    text-align: ${({ center }) => center ? 'center' : 'left'};
    padding: 0 50px;
    flex-direction: row;
    padding: 0 50px 0 0;
    &:nth-last-of-type(1) {
      padding: 0 0 0 50px;
    }
    &:first-of-type {
      padding: 0;
    }
  `}
`;
