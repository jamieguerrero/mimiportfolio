import styled from 'styled-components';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
  MobileBreakpoint,
  TabletBreakpoint,
} from './layout.styles';

import {
  FeatureText,
} from './typography.styles';

export const HomePage = styled.div`
  display: grid;
  grid-template-columns: ${DesktopHorizontalHeaderSpacing} 1fr 1fr ${DesktopHorizontalHeaderSpacing};
  width: 100vw;
  overflow: scroll;
  z-index: 100;
  white-space: pre;

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: ${MobileHorizontalHeaderSpacing} 1fr 1fr ${MobileHorizontalHeaderSpacing};
  }
`;

export const MobilePortfolioList = styled.div`
  grid-column: 1/5;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopPortfolioList = styled.div`
  display: flex;
  grid-column: 3;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }

  @media (max-width: ${TabletBreakpoint}) {
    grid-column: 2;
    position: relative;
    width: 100%;
  }
`;

export const MobilePortfolioPiece = styled.div`
  cursor: pointer;

  ${FeatureText} {
    padding-bottom: 2rem;
  }
`;

export const PortfolioPiece = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  filter: ${(props) => (props.blur ? 'blur(5px)' : 'blur(0px)')};
  cursor: pointer;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: -10;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  & > video {
    width: 80%;
  }
`;

export const PortfolioVideo = styled.video`
  display: ${(props) => (props.displayvideo || props.alwaysDisplay ? 'block' : 'none')};
  max-width: 100%;
  margin-bottom: 2rem;
`;
