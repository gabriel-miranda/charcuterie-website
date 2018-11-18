import styled from 'styled-components';
import { media } from 'theme';

export default styled.form`
  text-align: center;
  width: 600px;
  margin: 0 auto 100px auto;
  max-width: 100%;
  padding: 0 25px;
  ${media.md`
    padding: 0 50px;
  `}
`;
