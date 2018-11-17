import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { colors, sizes, transitions } from 'theme';
import LogoSvg from './logo.svg';

export default styled(LogoSvg)`
  width: ${({ small }) => small ? sizes.logo.width.small : sizes.logo.width.big};
  margin: ${({ small }) => small ? sizes.logo.margin.small : sizes.logo.margin.big};
  transition: ${transitions.nav_item};
  fill: ${colors.logo};
`;
