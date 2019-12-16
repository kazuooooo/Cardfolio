import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

export const dataQuery = graphql`
  fragment SiteMetaData on IndexJson {
    siteMetaData {
      title,
      description,
      type,
      image,
      twitter {
        site
      }
    }
  }
`

interface Props {
  data: {
    title: String,
    description: String,
    type: String,
    image: String,
    twitter: {
      site: String
    }
  }
}

const Header = ({
  data: {
    title,
    description,
    type,
    image,
    twitter,
  },
}: Props) => (
  <Helmet
      meta={[
        {
          name: 'charset',
          content: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          name: 'title',
          content: title,
        },
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: description,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:site',
          content: twitter.site,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ]}
     />
)

export default Header
