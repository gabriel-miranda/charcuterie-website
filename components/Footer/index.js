import React from 'react';
import FacebookIcon from 'mdi-react/FacebookBoxIcon';
import {
  StyledFooter,
  SubFooter,
  SubFooterText,
  FooterContainter,
  FooterLogo,
  ColumnTitle,
  ColumnItem,
  FooterLayout,
  FooterItem,
} from './styled';

export default () => (
  <StyledFooter>
    <FooterContainter>
      <FooterLayout>
        <FooterItem>
          <FooterLogo />
          <ColumnItem>
            LAS 4 B
          </ColumnItem>
        </FooterItem>
        <FooterItem>
          <ColumnTitle>
            Páginas
          </ColumnTitle>
          <ColumnItem>
            Inicio
          </ColumnItem>
          <ColumnItem>
            Nosotros
          </ColumnItem>
          <ColumnItem>
            Catalogo
          </ColumnItem>
          <ColumnItem>
            Contacto
          </ColumnItem>
        </FooterItem>
        <FooterItem>
          <ColumnTitle>
            Ubicación
          </ColumnTitle>
          <ColumnItem>
            Rodríguez Peña 2347 <br />
            Esperanza, Santa Fe
          </ColumnItem>
        </FooterItem>
        <FooterItem>
          <ColumnTitle>
            Contacto
          </ColumnTitle>
          <ColumnItem>
            info@las4b.com.ar
          </ColumnItem>
        </FooterItem>
        <FooterItem>
          <ColumnTitle>
            Redes
          </ColumnTitle>
          <ColumnItem>
            <a
              href="https://www.facebook.com/Las4Bfiambresyembutidos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                size={25}
                color="rgba(255,255,255,.7)"
              />
            </a>
          </ColumnItem>
        </FooterItem>
      </FooterLayout>
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
