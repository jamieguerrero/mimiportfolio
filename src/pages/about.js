import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/layout';

const About = ({ data: { about } }) => (
  <Layout>
    <HelmetDatoCms seo={about.seoMetaTags} />
    {about.title}
    {about.subtitle}
    <div
      className="sheet__body"
      dangerouslySetInnerHTML={{
        __html: about.bioNode.childMarkdownRemark.html,
      }}
    />
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
