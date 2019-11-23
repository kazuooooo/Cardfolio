import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { FontSize } from '../style'

const FrontSide = () => {
  const data = useStaticQuery(graphql`
    query {
      allPagesJson {
        edges {
          node {
            frontSide {
              jobTitle
              name
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <JobTitle>{data.allPagesJson.edges[0].node.frontSide.jobTitle}</JobTitle>
      <Name>{data.allPagesJson.edges[0].node.frontSide.name}</Name>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Name = styled.div`
  font-size: 36px;
`
const JobTitle = styled.div`
  font-size: ${FontSize.SubTitle};
`

export default FrontSide
