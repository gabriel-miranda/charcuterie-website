import styled from 'styled-components';
import {
  media,
  sizes,
} from 'theme';

export default styled.form`
  text-align: center;
  width: ${sizes.contact.width};
  margin: ${sizes.contact.margin};
  max-width: 100%;
  padding: ${sizes.contact.padding.small};
  ${media.md`
    padding: ${sizes.contact.padding.small};
  `}
`;
