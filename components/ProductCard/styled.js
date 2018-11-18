import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0,0,0,.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ThumbnailContainer = styled.figure`
  padding: 30px 0;
  max-width: 100%;
`;

export const CardThumbnail = styled.img`
  max-width: 100%;
  max-height: 170px;
`;

export const CardDetails = styled.div`
  text-align: left;
  background: #64d28d;
  color: #fff;
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  text-transform: uppercase;
  padding: 0 0 20px;
  margin: 0 0 10px;
  border-bottom: 1px solid #fff;
  font-weight: 600;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardDescription = styled.p`
  font-size: 13px;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'normal'};
`;
