import { css } from 'styled-components';

export const sizes = {
  screen: {
    phone: 300,
    tablet: 800,
    desktop: 1200,
  },
};

export const media = Object.keys(sizes.screen).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${sizes.screen[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
