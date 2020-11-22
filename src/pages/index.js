import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

import {
  HomePage,
  PortfolioList,
  PortfolioPiece,
  Title,
  FeatureText,
  Subtitle,
  VideoWrapper,
  PortfolioVideo,
} from '../global/styles';

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
