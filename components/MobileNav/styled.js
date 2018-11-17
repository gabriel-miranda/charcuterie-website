import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  left: ${({ open }) => open ? '0' : '-220px'};
  background: rgba(0,0,0,.5);
  padding: ${({ small }) => small ? '75px' : '180px'} 0 0;
  transition: all .2s ease-in;
`;
