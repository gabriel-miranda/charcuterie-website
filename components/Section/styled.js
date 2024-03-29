import styled from 'styled-components';
import {
  media,
  sizes,
  colors,
} from 'theme';

export default styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 100%;
  text-align: center;
  position: relative;
  background: ${colors.section.bg};
  padding: ${({ small }) => small ? sizes.section.padding_mobile.small : sizes.section.padding_mobile.big};
  width: ${({ center }) => center ? '100%' : sizes.section.width};
  ${media.md`
    padding: ${({ small }) => small ? sizes.section.padding.small : sizes.section.padding.big};
    text-align: ${({ center }) => center ? 'center' : 'left'};
    flex-direction: row;
  `}
`;

export const StyledSectionBlock = styled.div`
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0;
  ${media.md`
    flex-direction: row;
    padding: 0 ${sizes.section.block.padding.big} 0 0;
    &:nth-last-of-type(1) {
      padding: 0 0 0 ${sizes.section.block.padding.big};
    }
    &:first-of-type {
      padding: 0;
    }
  `}
`;
