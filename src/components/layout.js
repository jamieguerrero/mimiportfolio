/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import {
  GlobalStyle,
  LayoutWrapper,
  MenuLink,
  NavigationHeader,
  SocialIcon,
  MimiVuong,
  MenuItems,
  BottomLeftSocialIcons,
  BottomRightSocialIcons,
  MobileSocialFooter,
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
      <GlobalStyle
        backgroundcolor={data.datoCmsAboutPage.backgroundColor.hex}
      />
      <HelmetDatoCms title={data.datoCmsSite.globalSeo.siteName} />
      <NavigationHeader
        backgroundcolor={data.datoCmsAboutPage.backgroundColor.hex}
      >
        <MimiVuong>
          <Link to="/">
            <img alt="Mimi Vuong Logo" src={data.datoCmsAboutPage.logo.url} />
          </Link>
        </MimiVuong>
        <MenuItems>
          <MenuLink to="/" style={{ marginRight: '2rem' }}>
            PROJECTS
          </MenuLink>
          <MenuLink to="/about">ABOUT</MenuLink>
        </MenuItems>
      </NavigationHeader>
      <BottomLeftSocialIcons>
        <a href={data.email.url} target="_blank" rel="noreferrer">
          <SocialIcon
            src={data.email.icon.url}
            alt="Email Icon"
          />
        </a>
        <a href={data.vimeo.url} target="_blank" rel="noreferrer">
          <SocialIcon src={data.vimeo.icon.url} alt="Vimeo Icon" />
        </a>
      </BottomLeftSocialIcons>
      <BottomRightSocialIcons>
        <a href={data.twitter.url} target="_blank" rel="noreferrer">
          <SocialIcon
            src={data.twitter.icon.url}
            alt="Twitter Icon"
          />
        </a>
        <a href={data.instagram.url} target="_blank" rel="noreferrer">
          <SocialIcon src={data.instagram.icon.url} alt="Instagram Icon" />
        </a>
      </BottomRightSocialIcons>
      {children}
      <MobileSocialFooter>
        <a href={data.email.url} target="_blank" rel="noreferrer">
          <SocialIcon
            src={data.email.icon.url}
            alt="Email Icon"
          />
        </a>
        <a href={data.vimeo.url} target="_blank" rel="noreferrer">
          <SocialIcon src={data.vimeo.icon.url} alt="Vimeo Icon" />
        </a>
        <a href={data.twitter.url} target="_blank" rel="noreferrer">
          <SocialIcon
            src={data.twitter.icon.url}
            alt="Twitter Icon"
          />
        </a>
        <a href={data.instagram.url} target="_blank" rel="noreferrer">
          <SocialIcon src={data.instagram.icon.url} alt="Instagram Icon" />
        </a>
      </MobileSocialFooter>
    </LayoutWrapper>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
