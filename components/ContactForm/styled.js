import styled from 'styled-components';
import {
  sizes,
} from 'theme';

export default styled.form`
  text-align: center;
  width: ${({ center }) => center ? sizes.contact.width : '100%'};
  margin: ${({ center }) => center ? sizes.contact.margin : '0'};
  max-width: 100%;
  padding: 0;
`;
