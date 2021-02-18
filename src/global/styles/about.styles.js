import styled from 'styled-components';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
  MobileBreakpoint,
  TabletBreakpoint,
} from './layout.styles';

import { H1 } from './typography.styles';

export const AboutPage = styled.div`
  display: grid;
  grid-template-columns: ${DesktopHorizontalHeaderSpacing} 1fr 1fr ${DesktopHorizontalHeaderSpacing};
  width: 100%;

  @media (max-width: ${TabletBreakpoint}) {
    grid-template-columns: ${DesktopHorizontalHeaderSpacing} 1fr ${DesktopHorizontalHeaderSpacing};
  }

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: ${MobileHorizontalHeaderSpacing} 1fr ${MobileHorizontalHeaderSpacing};
  }
`;

export const AboutPageContent = styled.div`
  grid-column: 3;

  @media (max-width: ${TabletBreakpoint}) {
    grid-column: 2;
    grid-template-columns: 1fr;
  }
`;

export const SocialWrapper = styled.div`
  display: grid;
  margin-top: 3rem;
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

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

export const ClientWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: ${TabletBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: 1fr;
  }

  ${H1} {
    grid-column: 1/4;

    @media (max-width: ${TabletBreakpoint}) {
      grid-column: 1/3;
    }

    @media (max-width: ${MobileBreakpoint}) {
      grid-column: 1;
    }
  }

  img {
    height: 2rem;

    @media (max-width: ${MobileBreakpoint}) {
      height: 1.5rem;
    }
  }
`;

export const WebsiteCredits = styled.div`
  margin: 4rem 0; 

  @media (min-width: ${TabletBreakpoint}) {
    margin: 0;
    position: absolute;
    left: 60px;
    text-orientation: mixed;
    writing-mode: vertical-rl;
    bottom: 100px;
    transform: rotate(180deg);
  }
`;
