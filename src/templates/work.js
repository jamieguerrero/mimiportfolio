import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      {data.datoCmsWork.gallery.map(({ alt, url }) => (
        <img
          alt={alt}
          key={url}
          src={url}
        />
      ))}
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
        }}
      />
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      ftText
      subtitle
      coverVideo {
        url
      }
      fullVideo {
        url
      }
      description
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        alt
        url
      }
      credits {
        credit
      }
      clients {
        url
      }
    }
  }
`
