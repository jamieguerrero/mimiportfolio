import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import RellaxWrapper from 'react-rellax-wrapper';
import Layout from '../components/layout';
import GalleryPiece from '../components/gallerypiece';

import {
  PortfolioPage,
  Title,
  Subtitle,
} from '../global/styles';

export default ({ data: { vimeoVideo, datoCmsWork } }) => {
  const {
    seoMetaTags, title, ftText, subtitle, gallery, clients, credits,
  } = datoCmsWork;

  // credits.credit
  // clients.url

  const getVimeoURL = (iframehtml) => {
    const re = /(?<=(src\=\"))(.*?)(?=\?)/;
    return re.exec(iframehtml)[0];
  };

  return (
    <Layout>
      <PortfolioPage>
        <HelmetDatoCms seo={seoMetaTags} />
        <Title>{`${title} ${ftText}`}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <iframe
          src={getVimeoURL(vimeoVideo.iframe)}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="MIMI VUONG&amp;mdash;REEL"
        />
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        {/*
          Create a 2/3rd width center justified column of 12 columns
          Each gallery item rolls up at left, right, then center justified
          Each gallery item takes up 6, 4, then 8 columns
        */}

        {gallery.map(({
          id, photo, justified, columns,
        }) =>
        // const NewRellax = new Rellax(`.${id}`, {
        //   speed: -10,
        //   center: false,
        //   wrapper: null,
        //   round: true,
        //   vertical: true,
        //   horizontal: false,
        // });

          (
            <RellaxWrapper speed="-10" center="true">
              <GalleryPiece
                className={id}
                key={id}
                photo={photo.url}
                justified={justified}
                columns={columns}
              />
            </RellaxWrapper>
          ))}

        {credits.map((credit) => credit.credit)}

        {clients.map((client) => <img alt={client.filename} src={client.url} />)}
        ´
      </PortfolioPage>
    </Layout>
  );
};

export const query = graphql`
  query WorkQuery($slug: String!, $videoid: String!) {
    vimeoVideo(id: { eq: $videoid }) {
      iframe
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
