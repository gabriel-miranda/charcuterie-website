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
  main_padding: {
    big: '50px',
    small: '25px',
  },
  container: '1440px',
  nav_item_mobile: '220px',
};

const COLORS = {
  white: '#fff',
  white_40: 'rgba(255,255,255,.4)',
  white_70: 'rgba(255,255,255,.7)',

  black: '#252525',
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
      props_small: {
        big: `210px ${SIZES.main_padding.big} ${SIZES.main_padding.big}`,
        small: `210px ${SIZES.main_padding.small} ${SIZES.main_padding.small}`,
      },
      big: `280px ${SIZES.main_padding.big} 215px`,
      small: `200px ${SIZES.main_padding.small} 150px`,
    },
    margin: {
      props_small: '0 0 50px',
      big: '0',
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
      width: {
        big: '175px',
        small: '220px',
      },
      padding: {
        big: `${65 - SIZES.nav.item.border}px 40px`,
        small: `${32 - SIZES.nav.item.border}px 40px`,
        mobile: '20px 30px',
      },
      border: SIZES.nav.item.border,
      font: {
        big: '13px',
        small: '11px',
      },
      lspacing: '2px',
      weight: '700',
    },
    mobile: {
      left: {
        open: '0',
        closed: `-${SIZES.nav_item_mobile}`,
      },
      padding: {
        big: '150px',
        small: '75px',
      },
    },
  },
  button: {
    font: '16px',
    full: '100%',
    padding: {
      small: '1.5em',
      medium: '2.5em',
      big: '5em',
    },
    radius: '50px',
    lspacing: '2px',
  },
  hamburger: {
    width: '55px',
  },
  carousel: {
    padding: SIZES.main_padding.big,
  },
  catalog: {
    padding: {
      big: `0 ${SIZES.main_padding.big} ${SIZES.main_padding.big}`,
      small: `0 ${SIZES.main_padding.small} ${SIZES.main_padding.big}`,
    },
  },
  contact: {
    width: '650px',
    margin: '0 auto 100px',
    padding: {
      big: `0 ${SIZES.main_padding.big}`,
      small: `0 ${SIZES.main_padding.small}`,
    },
  },
  footer: {
    width: SIZES.container,
    padding: `0 ${SIZES.main_padding.small}`,
  },
  subfooter: {
    height: `${SIZES.subheader.height}px`,
    lheight: `${SIZES.subheader.height}px`,
    lspacing: '1.5px',
    font: '13px',
  },
  input: {
    width: '100%',
    lheight: '50px',
    padding: '0 20px',
    radius: '5px',
    margin_bottom: '30px',
  },
  product: {
    card: {
      width: '300px',
      margin: '0 15px 50px',
      radius: '5px',
    },
    details: {
      padding: '20px',
    },
    thumb: {
      padding: '0 30px',
      max_height: '170px',
    },
    title: {
      font: '15px',
      padding: '0 0 20px',
      margin: '0 0 10px',
      weight: '600',
    },
    description: {
      font: '13px',
    },
  },
  section: {
    width: SIZES.container,
    block: {
      padding: {
        big: SIZES.main_padding.big,
      },
    },
    padding_mobile: {
      small: `${SIZES.main_padding.big} ${SIZES.main_padding.small} 0`,
      big: `${SIZES.main_padding.big} ${SIZES.main_padding.small}`,
    },
    padding: {
      small: `65px ${SIZES.main_padding.big} ${SIZES.main_padding.small} 0`,
      big: `65px ${SIZES.main_padding.small}`,
    },
    description: {
      font: '16px',
      linheight: '2',
      lspacing: '2px',
      margin: '2em',
    },
    title: {
      font: '30px',
      padding: '0 0 20px 0',
      margin: '0 0 10px 0',
      weight: 600,
      lspacing: '3px',
      border: {
        height: '2px',
        width: '30px',
      },
    },
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
    font: {
      active: COLORS.white,
      default: COLORS.white_70,
    },
    bg: {
      active: COLORS.white_40,
      default: 'transparent',
    },
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
  input: COLORS.main_green_dark,
  footer: {
    bg: COLORS.main_green,
    font: COLORS.white,
  },
  product: {
    card: COLORS.white,
    details: {
      bg: COLORS.main_green_light,
      font: COLORS.white,
    },
  },
  section: {
    bg: COLORS.white,
    title: COLORS.black,
  },
};

export const images = {
  hero: {
    background: '/static/hero.jpg',
  },
  carousel: {
    background: '/static/productos.jpg',
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
  nav_mobile: TRANSITIONS.main,
};

export const borders = {
  subheader: `1px solid ${COLORS.white_40}`,
  nav_item: `${sizes.nav.item.border}px solid`,
  button: '1px solid',
  subfooter: `1px solid ${COLORS.white}`,
  input: '1px solid',
  card_title: `1px solid ${COLORS.white}`,
};

export const media = Object.keys(sizes.screen).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${sizes.screen[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
