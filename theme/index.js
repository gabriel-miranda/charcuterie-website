import { css } from 'styled-components';

const SIZES = {
  nav: {
    item: {
      border: 2,
    },
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
  fixed_top: `
    position: fixed;
    top: 0;
    left: 0;
  `,
};

const TRANSITIONS = {
  main: 'all .2s ease-in',
};

export const sizes = {
  screen: {
    sm: 300,
    md: 900,
    lg: 1200,
  },
  logo: {
    width: '75px',
    margin: '30px 50px',
  },
  hero: {
    padding: '280px 50px 215px',
    title: {
      font: '40px',
      weight: '400',
      lspacing: '8px',
    },
    subtitle: {
      width: '750px',
      font: '16px',
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
    height: '50px',
  },
  nav: {
    list: {
      width: '1050px',
    },
    item: {
      width: '175px',
      padding: `${65 - SIZES.nav.item.border}px 40px`,
      border: SIZES.nav.item.border,
      font: '13px',
      lspacing: '2px',
      weight: '700',
    },
  },
  button: {
    font: '16px',
    full: '100%',
    padding: '1.5em 5em',
    radius: '50px',
    lspacing: '2px',
  },
};

export const colors = {
  logo: COLORS.white,
  hero: {
    text: COLORS.white,
  },
  overlay: COLORS.black_60,
  loading_bar: COLORS.main_green,
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
};

export const images = {
  hero: {
    background: '/static/hero.jpg',
  },
};

export const positions = {
  overlay: POSITIONS.absolute_center,
  loading_bar: POSITIONS.fixed_top,
  nav: POSITIONS.absolute_top,
};

export const zindex = {
  hero_content: 1,
  nav: 2,
  loading_bar: 999,
};

export const transitions = {
  loading_bar: TRANSITIONS.main,
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
