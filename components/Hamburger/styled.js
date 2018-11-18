import styled from 'styled-components';
import { media } from 'theme';

export default styled.div`
  position: absolute;
  left: 25px;
  z-index: 10;
  transform: scale(.7);
  ${media.sm`
    transform: none;
  `}
  ${media.md`
    display: none;
  `}
  .hamburger {
    padding: 18px 0 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: none;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }

  .hamburger-inner::before {
    top: -10px;
  }

  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger.is-active .hamburger-inner {
    transform: rotate(45deg);
  }

  .hamburger.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
  }

  .hamburger.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
  }
`;
