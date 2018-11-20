import styled from 'styled-components';
import {
  colors,
  sizes,
  borders,
} from 'theme';

export const StyledFooter = styled.footer`
  background: ${colors.footer.bg};
  color: ${colors.footer.font};
`;

export const FooterContainter = styled.div`
  width: ${sizes.footer.width};
  padding: ${sizes.footer.padding};
  margin: 0 auto;
  max-width: 100%;
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
