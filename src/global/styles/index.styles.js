import styled from 'styled-components';

import {
  DesktopHorizontalHeaderSpacing,
  MobileHorizontalHeaderSpacing,
} from './layout.styles';

export const HomePage = styled.div`
  display: grid;
  grid-template-columns: ${DesktopHorizontalHeaderSpacing} 1fr 1fr ${DesktopHorizontalHeaderSpacing};
  width: 100vw;
  overflow: scroll;
  z-index: 100;
  white-space: pre;

  @media (max-width: 767px) {
    grid-template-columns: ${MobileHorizontalHeaderSpacing} 1fr 1fr ${MobileHorizontalHeaderSpacing};
  }
`;

export const MobilePortfolioList = styled.div`
  grid-column: 2/4;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopPortfolioList = styled.div`
  display: flex;
  grid-column: 3;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 1200px) {
    grid-column: 2;
    position: relative;
    width: 100%;
  }
`;

export const MobilePortfolioPiece = styled.div`
  cursor: pointer;
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
