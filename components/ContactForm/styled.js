import styled, { keyframes, css } from 'styled-components';
import {
  sizes,
} from 'theme';

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const InnerButton = styled.span`
  position: relative;
`;

export const Icon = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -2em;
  margin: auto;
  animation: ${({ spin }) => spin ? css`${spinning} 1s linear infinite` : 'none'}
`;

export default styled.form`
  text-align: center;
  width: ${({ center }) => center ? sizes.contact.width : '100%'};
  margin: ${({ center }) => center ? sizes.contact.margin : '0'};
  max-width: 100%;
  padding: 0;
`;
