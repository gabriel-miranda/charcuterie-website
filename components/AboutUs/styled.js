import styled from 'styled-components';
import {
  media,
} from 'theme';

export const AboutUsImg = styled.img`
  margin: 50px auto 0;
  ${media.md`
    position: absolute;
    left: 50px;
    top: -65px;
    max-width: none;
    width: 960px;
    margin: 0;
  `}
`;

export const AboutTheCompanyImg = styled.div`
  height: 300px;
  width: 100%;
  background: url('static/compania.jpg') center;
  background-size: cover;
  margin: -50px 0 0;
`;
