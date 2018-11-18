import styled from 'styled-components';

export default styled.h2`
  position: relative;
  display: inline-block;
  font-size: 30px;
  padding: 0 0 20px 0;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 30px;
    background: #252525;
  }
`;
