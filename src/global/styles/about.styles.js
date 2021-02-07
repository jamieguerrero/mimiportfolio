import styled from 'styled-components';

import {
  DesktopHeaderHeight,
  MobileHeaderHeight,
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
} from './layout.styles';

export const AboutPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  margin: 0 ${DesktopHorizontalHeaderSpacing};

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    margin: 0 ${MobileHorizontalHeaderSpacing};
  }
`;

export const AboutPageContent = styled.div`
  grid-column: 2;
  margin-top: ${DesktopHeaderHeight};

  @media (max-width: 767px) {
    margin-top: ${MobileHeaderHeight};
    grid-template-columns: 1fr;
  }
`;
