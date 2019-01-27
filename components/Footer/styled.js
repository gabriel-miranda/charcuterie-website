import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import {
  colors,
  sizes,
  media,
  borders,
} from 'theme';
import LogoSvg from 'components/NavLogo/logo.svg';

export const StyledFooter = styled.footer`
  background: ${colors.footer.bg};
  color: ${colors.footer.font};
  padding: 50px 0 0;
`;

export const FooterLogo = styled(LogoSvg)`
  fill: #fff;
  width: 75px;
`;

export const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.md`
    flex-direction: row;
  `}
`;

export const FooterItem = styled.div`
  margin: 0 50px 25px 0;
  min-width: 180px;
  width: 100%;
  &:first-of-type {
    min-width: 0;
    text-align: center;
    margin: 0 50px 50px 0;
  }
  ${media.md`
    width: auto;
    min-width: 120px;
  `}
`;

export const ColumnTitle = styled.h5`
  text-transform: uppercase;
  padding-bottom: 1.5em;
  border-bottom: 1px solid rgba(255,255,255,.7);
  color: rgba(255,255,255,.7);
  font-size: 13px;
  letter-spacing: 3px;
  margin: 0;
`;

export const ColumnItem = styled.p`
  color: #fff;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 2px;
`;

export const FooterContainter = styled.div`
  width: ${sizes.footer.width};
  padding: 50px 25px;
  margin: 0 auto;
  max-width: 100%;
  ${media.md`
    padding: ${sizes.footer.padding};
  `}
`;

export const SubFooter = styled.div`
  height: ${sizes.subfooter.height};
  border-top: ${borders.subfooter};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubFooterText = styled.p`
  font-size: ${sizes.subfooter.font};
  line-height: ${sizes.subfooter.lheight};
  letter-spacing: ${sizes.subfooter.lspacing};
  margin: 0;
`;
