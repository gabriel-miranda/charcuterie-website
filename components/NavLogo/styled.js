import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { colors, sizes } from 'theme';
import LogoSvg from './logo.svg';

export default styled(LogoSvg)`
  width: ${sizes.logo.width};
  margin: ${sizes.logo.margin};
  fill: ${colors.logo};
`;
