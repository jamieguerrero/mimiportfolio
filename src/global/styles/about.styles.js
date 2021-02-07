import styled from 'styled-components';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
} from './layout.styles';

export const AboutPage = styled.div`
  display: grid;
  grid-template-columns: ${DesktopHorizontalHeaderSpacing} 1fr 1fr ${DesktopHorizontalHeaderSpacing};
  width: 100%;
  height: 100vh;

  @media (max-width: 767px) {
    grid-template-columns: ${MobileHorizontalHeaderSpacing} 1fr ${MobileHorizontalHeaderSpacing};
  }
`;

export const AboutPageContent = styled.div`
  grid-column: 3;

  @media (max-width: 767px) {
    grid-column: 2;
    grid-template-columns: 1fr;
  }
`;

export const ClientWrapper = styled.div`
  margin-top: 2rem;
`;
