import styled from 'styled-components';
import { media } from 'theme';

export default styled.div`
  text-align: center;
  position: relative;
  padding: 50px;
  background: url('/static/productos.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${media.md`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;
