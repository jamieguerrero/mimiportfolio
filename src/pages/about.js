import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/layout';

import {
  AboutPage,
  AboutPageContent,
  SocialWrapper,
  ClientWrapper,
} from '../global/styles/about.styles';
import { H1, BodyTextWrapper } from '../global/styles/typography.styles';

const About = ({
  data: {
    about, email, vimeo, twitter, instagram,
  },
}) => (
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
        <SocialWrapper>
          <a href={email.url} target="_blank" rel="noreferrer">
            <img
              src={email.icon.url}
              alt="Email Icon"
              style={{ marginRight: '.5rem' }}
            />
            {email.handle}
          </a>
          <a href={vimeo.url} target="_blank" rel="noreferrer">
            <img
              src={vimeo.icon.url}
              alt="Vimeo Icon"
              style={{ marginRight: '.5rem' }}
            />
            {vimeo.handle}
          </a>
          <a href={twitter.url} target="_blank" rel="noreferrer">
            <img
              src={twitter.icon.url}
              alt="Twitter Icon"
              style={{ marginRight: '.5rem' }}
            />
            {twitter.handle}
          </a>
          <a href={instagram.url} target="_blank" rel="noreferrer">
            <img
              src={instagram.icon.url}
              alt="Instagram Icon"
              style={{ marginRight: '.5rem' }}
            />
            {instagram.handle}
          </a>
        </SocialWrapper>

        <ClientWrapper>
          <H1>Clients</H1>
          {about.clients.map((client) => (<img src={client.url} alt={client.title} />))}
        </ClientWrapper>
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
      clients {
        url
        title
      }
    }
    email: datoCmsSocialProfile(profileType: { eq: "Email" }) {
      url
      profileType
      handle
      icon {
        url
      }
    }
    vimeo: datoCmsSocialProfile(profileType: { eq: "Vimeo" }) {
      url
      profileType
      handle
      icon {
        url
      }
    }
    twitter: datoCmsSocialProfile(profileType: { eq: "Twitter" }) {
      url
      profileType
      handle
      icon {
        url
      }
    }
    instagram: datoCmsSocialProfile(profileType: { eq: "Instagram" }) {
      url
      profileType
      handle
      icon {
        url
      }
    }
  }
`;
