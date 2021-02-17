import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import {
  HomePage,
  MobilePortfolioList,
  DesktopPortfolioList,
  MobilePortfolioPiece,
  PortfolioPiece,
  VideoWrapper,
  PortfolioVideo,
} from '../global/styles/index.styles';

import {
  Title,
  MobilePortfolioTitle,
  FeatureText,
  Subtitle,
} from '../global/styles/typography.styles';

const IndexPage = ({ data: { allDatoCmsWork } }) => {
  const [hoveredWorkID, setHoveredWorkID] = useState(null);

  const workselected = (id) => (id === hoveredWorkID ? true : undefined);

  return (
    <Layout>
      <HomePage>
        <MobilePortfolioList>
          {allDatoCmsWork.edges.map(({ node: work }) => (
            <MobilePortfolioPiece>
              <Title to={`/works/${work.slug}`}>
                <MobilePortfolioTitle>{work.title}</MobilePortfolioTitle>
                <FeatureText style={{ marginBottom: '1rem' }}>{work.ftText && work.ftText}</FeatureText>
                <PortfolioVideo
                  autoPlay
                  muted
                  loop
                  role="video"
                  alwaysDisplay
                  key={work.id}
                  src={work.coverVideo.url}
                />
              </Title>
            </MobilePortfolioPiece>
          ))}
        </MobilePortfolioList>
        <DesktopPortfolioList>
          {allDatoCmsWork.edges.map(({ node: work }) => (
            <PortfolioPiece
              key={work.id}
              onMouseEnter={() => {
                setHoveredWorkID(work.id);
              }}
              onMouseLeave={() => {
                setHoveredWorkID(null);
              }}
              blur={!workselected(work.id) && hoveredWorkID}
            >
              <Title
                to={`/works/${work.slug}`}
                selected={workselected(work.id)}
              >
                {work.title}
                <FeatureText selected={workselected(work.id)}>
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
        </DesktopPortfolioList>
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
