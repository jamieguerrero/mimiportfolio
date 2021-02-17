import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import GalleryPiece from '../components/gallerypiece';

import {
  PortfolioPage,
  PortfolioWrapper,
  PortfolioAboveTheFold,
  PortfolioVideo,
  WorkCreditWrapper,
  CreditsWrapper,
  ClientWrapper,
  PortfolioGalleryWrapper,
  PortfolioDescription,
} from '../global/styles/work.styles';

import {
  Title,
  Subtitle,
  BodyTextWrapper,
} from '../global/styles/typography.styles';

export default ({ data: { vimeoVideo, datoCmsAboutPage, datoCmsWork } }) => {
  const {
    seoMetaTags,
    title,
    ftText,
    subtitle,
    gallery,
    clients,
    credits,
  } = datoCmsWork;

  // credits.credit
  // clients.url

  const getVimeoURL = (iframehtml) => {
    const re = /(?<=(src\=\"))(.*?)(?=\?)/;
    return re.exec(iframehtml)[0];
  };

  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <PortfolioPage>
        <PortfolioWrapper>
          <PortfolioAboveTheFold speed={-8} backgroundcolor={datoCmsAboutPage.backgroundColor.hex}>
            <Title>{`${title} ${ftText}`}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </PortfolioAboveTheFold>
          {/*
            Each gallery item rolls up at left, right, then center justified
            Each gallery item takes up 6, 4, then 8 columns
          */}

          <PortfolioGalleryWrapper rows={gallery.length + 2} speed={0}>
            <PortfolioVideo
              src={getVimeoURL(vimeoVideo.iframe)}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="MIMI VUONG&amp;mdash;REEL"
            />
            <PortfolioDescription
              dangerouslySetInnerHTML={{
                __html: datoCmsWork.descriptionNode.childMarkdownRemark.html,
              }}
            />
            {gallery.map(({
              id, photo, justified, columns,
            }, row) => (
              // const NewRellax = new Rellax(`.${id}`, {
              //   speed: -10,
              //   center: false,
              //   wrapper: null,
              //   round: true,
              //   vertical: true,
              //   horizontal: false,
              // });

              <GalleryPiece
                row={row + 3}
                className={id}
                key={id}
                photo={photo.url}
                justified={justified}
                columns={columns}
              />
            ))}
          </PortfolioGalleryWrapper>

          <WorkCreditWrapper speed={0}>
            <CreditsWrapper>
              <BodyTextWrapper>CREDITS</BodyTextWrapper>
              {credits.map((credit) => (
                <BodyTextWrapper>{credit.credit}</BodyTextWrapper>
              ))}
            </CreditsWrapper>

            <ClientWrapper>
              {clients.map((client) => (
                <img alt={client.filename} src={client.url} />
              ))}
            </ClientWrapper>
          </WorkCreditWrapper>
        </PortfolioWrapper>
      </PortfolioPage>
    </Layout>
  );
};

export const query = graphql`
  query WorkQuery($slug: String!, $videoid: String!) {
    vimeoVideo(id: { eq: $videoid }) {
      iframe
    }
    datoCmsAboutPage {
      backgroundColor {
        hex
      }
    }
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      ftText
      subtitle
      coverVideo {
        filename
        url
      }
      fullVideo {
        title
        url
      }
      description
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        photo {
          url
        }
        justified
        columns
      }
      credits {
        credit
      }
      clients {
        url
      }
    }
  }
`;
