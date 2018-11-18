import React from 'react';
import NavLogo from 'components/NavLogo';
import {
  StyledFooter,
  SubFooter,
  SubFooterText,
  FooterContainter,
} from './styled';

export default () => (
  <StyledFooter>
    <FooterContainter>
      <NavLogo />
      <SubFooter>
        <SubFooterText>
          TEL 1800 0800 0800
        </SubFooterText>
        <SubFooterText>
          © {new Date().getFullYear()} LAS 4B S.R.L. Todos los derechos reservados
        </SubFooterText>
      </SubFooter>
    </FooterContainter>
  </StyledFooter>
);
