import styled from 'styled-components';
import {
  media,
  images,
  sizes,
} from 'theme';
import { CardContainer } from 'components/ProductCard/styled';

const StyledCarousel = styled.div`
  position: relative;
  padding: 75px 25px;
  text-align: center;
  background: url(${images.carousel.background}) center center no-repeat;
  background-size: cover;
  background-attachment: fixed;

  ${media.md`
    padding: ${sizes.carousel.padding};

    ${CardContainer}:nth-of-type(odd) {
      position: absolute;
      transform: scale(.8);
      filter: brightness(.8);
      top: 0;
    }

    ${CardContainer}:nth-of-type(1) {
      right: 400px;
      left: 0px;
      margin: auto;
    }

    ${CardContainer}:nth-of-type(2) {
      z-index: 3;
    }

    ${CardContainer}:nth-of-type(3) {
      left: 400px;
      right: 0px;
      margin: auto;
    }
  `}
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
