import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/layout';

import { AboutPage, AboutPageContent } from '../global/styles/about.styles';
import { H1, BodyTextWrapper } from '../global/styles/typography.styles';

const About = ({ data: { about } }) => (
  <Layout>
    <HelmetDatoCms seo={about.seoMetaTags} />
    <AboutPage>
      <AboutPageContent>
        <H1>{about.title}</H1>
        <BodyTextWrapper>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: about.bioNode.childMarkdownRemark.html,
            }}
          />
        </BodyTextWrapper>
      </AboutPageContent>
    </AboutPage>
  </Layout>
);

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
