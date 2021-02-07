/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import './style.css';

import {
  GlobalStyle,
  LayoutWrapper,
  MenuLink,
  NavigationHeader,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
} from '../global/styles/layout.styles';

const TemplateWrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
      }
      datoCmsAboutPage {
        credits
        backgroundColor {
          hex
        }
        logo {
          url
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
  `);

  return (
    <LayoutWrapper>
      <GlobalStyle backgroundcolor={data.datoCmsAboutPage.backgroundColor.hex} />
      <HelmetDatoCms title={data.datoCmsSite.globalSeo.siteName} />
      <NavigationHeader backgroundcolor={data.datoCmsAboutPage.backgroundColor.hex}>
        <TopLeft>
          <Link to="/">
            <img alt="Mimi Vuong Logo" src={data.datoCmsAboutPage.logo.url} />
          </Link>
        </TopLeft>
        <TopRight>
          <MenuLink to="/" style={{ marginRight: '2rem' }}>
            PROJECTS
          </MenuLink>
          <MenuLink to="/about">ABOUT</MenuLink>
        </TopRight>
      </NavigationHeader>
      <BottomLeft>
        <a href={data.email.url} target="_blank" rel="noreferrer">
          <img
            src={data.email.icon.url}
            alt="Email Icon"
            style={{ marginRight: '.5rem' }}
          />
        </a>
        <a href={data.vimeo.url} target="_blank" rel="noreferrer">
          <img src={data.vimeo.icon.url} alt="Vimeo Icon" />
        </a>
      </BottomLeft>
      <BottomRight>
        <a href={data.twitter.url} target="_blank" rel="noreferrer">
          <img
            src={data.twitter.icon.url}
            alt="Twitter Icon"
            style={{ marginRight: '.5rem' }}
          />
        </a>
        <a href={data.instagram.url} target="_blank" rel="noreferrer">
          <img src={data.instagram.icon.url} alt="Instagram Icon" />
        </a>
      </BottomRight>
      {children}
    </LayoutWrapper>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
