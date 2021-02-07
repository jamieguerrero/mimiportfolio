import styled from 'styled-components';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
} from './layout.styles';

import { H1 } from './typography.styles';

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

export const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  white-space: nowrap;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const ClientWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }

  h1 {
    grid-column: 1/4;

    @media (max-width: 767px) {
      grid-column: 1/3;
    }
  }

  img {
    height: 2rem;

    @media (max-width: 767px) {
      height: 1.5rem;
    }
  }
`;
