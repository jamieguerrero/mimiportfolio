import styled from 'styled-components';

import RellaxWrapper from 'react-rellax-wrapper';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
  MobileBreakpoint,
  DesktopBreakpoint,
} from './layout.styles';

export const PortfolioPage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 70vw;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${DesktopBreakpoint}) {
    grid-template-columns: repeat(12, 1fr);
  }

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: repeat(12, 1fr);
    width: 100vw;
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-column: 1/13;
  grid-template-columns: ${MobileHorizontalHeaderSpacing} repeat(10, 1fr) ${MobileHorizontalHeaderSpacing};
  grid-row-gap: 5rem;
`;

export const PortfolioAboveTheFold = styled(RellaxWrapper)`
  grid-column: 3/11;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  background-color: ${(props) => props.backgroundcolor};

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 2/13;
  }
`;

export const PortfolioVideo = styled.iframe`
  grid-row: 1;
  grid-column: 2/12;
  height: 436px;
  width: 100%;

  @media (max-width: ${MobileBreakpoint}){
    grid-column: 1/13;
  }
`;

export const PortfolioDescription = styled.div`
  text-align: left;
  grid-row: 2;
  grid-column: 2/12;
`;

export const PortfolioGalleryWrapper = styled(RellaxWrapper)`
  grid-column: 1/15;
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(12, 1fr);
  z-index: -10;
`;

export const WorkCreditWrapper = styled(RellaxWrapper)`
  grid-column: 2/13;
  text-align: left;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const CreditsWrapper = styled.div`
  grid-column: 5/9;

  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 2/13;
  }
`;

export const ClientWrapper = styled.div`
  margin: 10rem 0;
  grid-column: 5/9;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  img {
    margin: 0 auto;
  }

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 1/15;
  }
`;
