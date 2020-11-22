import styled from 'styled-components';
import { Link } from 'gatsby';

export const HomePage = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: flex-end;
  overflow: scroll;
`;

export const PortfolioList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  justify-content: center;
`;

export const PortfolioPiece = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  filter: ${(props) => (props.blur ? 'blur(5px)' : 'blur(0px)')}
`;

export const Title = styled(Link)`
  font-size: 25px;
  line-height: 40px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
`;

export const FeatureText = styled.span`
  font-size: 12px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
  margin-left: .5rem;
`;

export const Subtitle = styled(Link)`
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
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
  display: ${(props) => (props.displayvideo ? 'block' : 'none')}
`;

export const PortfolioPage = styled.div`
  display: flex;
  flex-direction: column;
`;
