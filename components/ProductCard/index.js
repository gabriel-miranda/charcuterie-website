import React from 'react';
import {
  CardContainer,
  CardThumbnail,
  CardDetails,
  CardTitle,
  CardDescription,
  ThumbnailContainer,
  DescriptionContainer,
} from './styled';

export default () => (
  <CardContainer>
    <ThumbnailContainer>
      <CardThumbnail src="/static/jamon_cocido.jpg" />
    </ThumbnailContainer>
    <CardDetails>
      <CardTitle>
        Jamón cocido
      </CardTitle>
      <DescriptionContainer>
        <CardDescription uppercase>
          Cod 173
        </CardDescription>
        <CardDescription>
          5kg./ 4U. x Caja
        </CardDescription>
      </DescriptionContainer>
    </CardDetails>
  </CardContainer>
);
