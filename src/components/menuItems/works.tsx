/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {}

const Works = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dataJson {
      selfIntroduction {
        description
        title
        socialURLs {
          name
          id
          url
        }
      }
    }
  }
`)
  const { selfIntroduction } = data.dataJson
  return (
    <Container>
      works
    </Container>
  )
}


const Container = styled.div`
  padding: 24px;
`
export default Works
