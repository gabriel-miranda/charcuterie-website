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

export const CenterCatalog = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: ${sizes.catalog.margin};
  padding: ${sizes.catalog.padding.small};
  ${media.md`
    flex-direction: row;
    padding: ${sizes.catalog.padding.big};
  `};
  h4 {
    color: #666;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.5;
  }
  svg {
    fill: #666;
  }
`;
