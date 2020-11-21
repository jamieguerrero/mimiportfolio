import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const HomePage = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: flex-end;
  overflow: scroll;
`;

const PortfolioList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 9rem 0;
`;

const PortfolioPiece = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  filter: ${(props) => (props.blur ? 'blur(5px)' : 'blur(0px)')}
`;

const Title = styled(Link)`
  font-size: 25px;
  line-height: 40px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
`;

const FeatureText = styled.span`
  font-size: 12px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
  margin-left: .5rem;
`;

const Subtitle = styled(Link)`
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
`;

const VideoWrapper = styled.div`
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

const PortfolioVideo = styled.video`
  display: ${(props) => (props.displayvideo ? 'block' : 'none')}
`;

const IndexPage = ({ data: { allDatoCmsWork } }) => {
  const [hoveredWorkID, setHoveredWorkID] = useState(null);

  const workselected = (id) => ((id === hoveredWorkID) ? true : undefined);

  return (
    <Layout>
      <HomePage>
        <PortfolioList>
          {allDatoCmsWork.edges.map(({ node: work }) => (
            <PortfolioPiece
              key={work.id}
              onMouseEnter={() => { setHoveredWorkID(work.id); }}
              onMouseLeave={() => { setHoveredWorkID(null); }}
              blur={!workselected(work.id) && hoveredWorkID}
            >
              <Title
                to={`/works/${work.slug}`}
                selected={workselected(work.id)}
              >
                {work.title}
                <FeatureText
                  selected={workselected(work.id)}
                >
                  {work.ftText && work.ftText}
                </FeatureText>
              </Title>
              <Subtitle
                to={`/works/${work.slug}`}
                selected={workselected(work.id)}
              >
                {work.subtitle}
              </Subtitle>
            </PortfolioPiece>
          ))}
        </PortfolioList>
      </HomePage>
      <VideoWrapper>
        {allDatoCmsWork.edges.map(({ node: work }) => (
          <PortfolioVideo
            autoPlay
            muted
            loop
            role="video"
            key={work.id}
            src={work.coverVideo.url}
            displayvideo={workselected(work.id)}
          />
        ))}
      </VideoWrapper>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          ftText
          subtitle
          slug
          coverVideo {
            url
          }
        }
      }
    }
  }
`;
