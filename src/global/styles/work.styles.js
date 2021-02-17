import styled from 'styled-components';

import RellaxWrapper from 'react-rellax-wrapper';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
  MobileBreakpoint,
  DesktopBreakpoint,
  TabletBreakpoint,
} from './layout.styles';

export const PortfolioPage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 70vw;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${DesktopBreakpoint}) {
    grid-template-columns: repeat(12, 1fr);
    width: 100vw;
  }

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: ${MobileHorizontalHeaderSpacing} repeat(12, 1fr) ${MobileHorizontalHeaderSpacing};
    width: 100vw;
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-column: 1/15;
  grid-template-columns: ${MobileHorizontalHeaderSpacing} repeat(12, 1fr) ${MobileHorizontalHeaderSpacing};
`;

export const PortfolioAboveTheFold = styled(RellaxWrapper)`
  grid-column: 4/12;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  background-color: ${(props) => props.backgroundcolor};
  margin-bottom: 2rem;

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 2/14;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  grid-row: 1;
  grid-column: 4/12;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  margin-bottom: 2rem;

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 1/15;
  }
`;

export const PortfolioVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const PortfolioDescription = styled.div`
  text-align: left;
  grid-row: 2;
  grid-column: 4/12;
  margin-bottom: 2rem;

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 2/14;
  }
`;

export const PortfolioGalleryWrapper = styled(RellaxWrapper)`
  grid-column: 1/15;
  display: grid;
  grid-template-rows: auto auto repeat(${(props) => props.rows - 2}, 1fr);
  grid-template-columns: ${MobileHorizontalHeaderSpacing} repeat(12, 1fr) ${MobileHorizontalHeaderSpacing};
  z-index: -10;
`;

export const WorkCreditWrapper = styled(RellaxWrapper)`
  grid-column: 2/14;
  text-align: left;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const CreditsWrapper = styled.div`
  grid-column: 5/9;
  margin-top: 10rem;

  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 1/15;
  }
`;

export const ClientWrapper = styled.div`
  margin: 10rem 0;
  grid-column: 5/9;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  img {
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-self: center;
  }

  @media (max-width: ${TabletBreakpoint}) {
    grid-column: 3/11;
  }

  @media (max-width: ${MobileBreakpoint}) {
    grid-column: 1/15;
  }
`;
