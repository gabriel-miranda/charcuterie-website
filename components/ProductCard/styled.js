import styled from 'styled-components';
import {
  sizes,
  colors,
  borders,
} from 'theme';

export const CardContainer = styled.div`
  width: ${sizes.product.card.width};
  margin: ${sizes.product.card.margin};
  border-radius: ${sizes.product.card.radius};
  background: ${colors.product.card};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: ce0nter;
  box-shadow: 0 3px 10px rgba(0,0,0,.2);
`;

export const ThumbnailContainer = styled.figure`
  max-width: 100%;
  padding: ${sizes.product.thumb.padding};
`;

export const CardThumbnail = styled.img`
  max-width: 100%;
  max-height: ${sizes.product.thumb.max_height};
`;

export const CardDetails = styled.div`
  text-align: left;
  background: ${colors.product.details.bg};
  color: ${colors.product.details.font};
  padding: ${sizes.product.details.padding};
`;

export const CardTitle = styled.h3`
  font-size: ${sizes.product.title.font};
  border-bottom: ${borders.card_title};
  font-weight: ${sizes.product.title.weight};
  padding: ${sizes.product.title.padding};
  margin: ${sizes.product.title.margin};
  text-transform: uppercase;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardDescription = styled.p`
  font-size: ${sizes.product.description.font};
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'normal'};
`;
