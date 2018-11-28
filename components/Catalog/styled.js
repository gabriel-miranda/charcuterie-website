import styled from 'styled-components';
import {
  media,
  sizes,
  colors,
} from 'theme';

export default styled.div`
  background: ${colors.catalog};
  overflow: hidden;
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: ${sizes.catalog.margin};
  padding: ${sizes.catalog.padding.small};
  ${media.md`
    flex-direction: row;
    padding: ${sizes.catalog.padding.big};
  `};
`;
