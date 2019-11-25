import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { FontSize } from '../style'

const FrontSide = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        frontSide {
          jobTitle
          name
        }
      }
    }
  `)
  const { frontSide } = data.dataJson
  return (
    <Container>
      <JobTitle>{frontSide.jobTitle}</JobTitle>
      <Name>{frontSide.name}</Name>
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
  margin-top: 20px;
  font-size: 36px;
`
const JobTitle = styled.div`
  font-size: ${FontSize.SubTitle};
`

export default FrontSide
