import styled from 'styled-components';
import {
  media,
  sizes,
} from 'theme';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes.catalog.padding.small};
  ${media.md`
    flex-direction: row;
    padding: ${sizes.catalog.padding.big};
  `};
`;
