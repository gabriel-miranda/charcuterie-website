import { css } from 'styled-components';

const SIZES = {
  nav: {
    item: {
      border: 2,
    },
  },
  subheader: {
    height: 50,
  },
};

const COLORS = {
  white: '#fff',
  white_40: 'rgba(255,255,255,.4)',
  white_70: 'rgba(255,255,255,.7)',

  black_60: 'rgba(0,0,0,.6)',

  main_green: '#4cbc76',
  main_green_light: '#64d28d',
  main_green_dark: '#009f3c',
};

const POSITIONS = {
  absolute_center: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
  `,
  absolute_top: `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  `,
  absolute_top_50: `
    position: absolute;
    top: ${SIZES.subheader.height}px;
    left: 0;
    right: 0;
  `,
  fixed_top: `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  `,
};

const TRANSITIONS = {
  main: 'all .2s ease-in',
  background: 'background-color .2s ease-in',
};

export const sizes = {
  screen: {
    sm: 500,
    md: 900,
    lg: 1200,
  },
  logo: {
    width: {
      big: '75px',
      small: '35px',
    },
    margin: {
      big: '30px 50px',
      small: '20px 50px',
    },
  },
  hero: {
    padding: {
      big: '280px 50px 215px',
      small: '200px 25px 150px',
    },
    title: {
      font: {
        big: '40px',
        small: '30px',
      },
      weight: '400',
      lspacing: '8px',
    },
    subtitle: {
      width: '750px',
      font: {
        big: '16px',
        small: '14px',
      },
      lspacing: '2px',
      line_height: '1.8em',
      margin_bottom: '3em',
    },
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  loading_bar: '.5rem',
  subheader: {
    height: `${SIZES.subheader.height}px`,
    width: '100%',
  },
  nav: {
    list: {
      width: '1050px',
    },
    item: {
      width: '175px',
      padding: {
        big: `${65 - SIZES.nav.item.border}px 40px`,
        small: `${32 - SIZES.nav.item.border}px 40px`,
      },
      border: SIZES.nav.item.border,
      font: '13px',
      lspacing: '2px',
      weight: '700',
    },
  },
  button: {
    font: '16px',
    full: '100%',
    padding: {
      small: '1.5em',
      big: '5em',
    },
    radius: '50px',
    lspacing: '2px',
  },
  hamburger: {
    width: '55px',
  },
};

export const colors = {
  logo: COLORS.white,
  hero: {
    text: COLORS.white,
  },
  overlay: COLORS.black_60,
  loading_bar: COLORS.main_green,
  nav: {
    small: COLORS.black_60,
    big: 'transparent',
  },
  nav_item: {
    active: COLORS.white,
    default: COLORS.white_70,
  },
  button: {
    solid: {
      bg: COLORS.main_green,
      bg_light: COLORS.main_green_light,
      bg_dark: COLORS.main_green_dark,
      font: COLORS.white,
    },
    transparent: {
      bg: 'transparent',
      font: {
        green: COLORS.main_green,
        white: COLORS.white,
      },
    },
  },
  em: COLORS.main_green_dark,
};

export const images = {
  hero: {
    background: '/static/hero.jpg',
  },
};

export const positions = {
  overlay: POSITIONS.absolute_center,
  loading_bar: POSITIONS.fixed_top,
  nav: POSITIONS.absolute_top_50,
  nav_fixed: POSITIONS.fixed_top,
  subheader: POSITIONS.absolute_top,
  waypoint: POSITIONS.absolute_top_50,
};

export const zindex = {
  hero_content: 1,
  nav: 2,
  subheader: 2,
  loading_bar: 999,
};

export const transitions = {
  loading_bar: TRANSITIONS.main,
  nav: TRANSITIONS.background,
  nav_item: TRANSITIONS.main,
};

export const borders = {
  subheader: `1px solid ${COLORS.white_40}`,
  nav_item: `${sizes.nav.item.border}px solid`,
  button: '1px solid',
};

export const media = Object.keys(sizes.screen).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${sizes.screen[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
