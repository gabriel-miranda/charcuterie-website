import styled from 'styled-components';
import {
  media,
  images,
  sizes,
} from 'theme';

const StyledCarousel = styled.div`
  position: relative;
  padding: ${sizes.carousel.padding};
  text-align: center;
  background: url(${images.carousel.background}) center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  ${media.md`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

export default StyledCarousel;
