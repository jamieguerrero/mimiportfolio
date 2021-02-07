import styled from 'styled-components';

export const HomePage = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: flex-end;
  overflow: scroll;
`;

export const MobilePortfolioList = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopPortfolioList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 1200px) {
    position: relative;
    width: 100%;
    margin: 0 3rem;
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
