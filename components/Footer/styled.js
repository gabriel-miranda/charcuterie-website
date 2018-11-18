import styled from 'styled-components';
import { colors } from 'theme';

export const StyledFooter = styled.footer`
  background: ${colors.footer};
  color: #fff;
`;

export const FooterContainter = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 20px 0;
`;

export const SubFooter = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #fff;
`;

export const SubFooterText = styled.p`
  font-size: 13px;
  line-height: 50px;
  margin: 0;
  letter-spacing: 1.5px;
`;
