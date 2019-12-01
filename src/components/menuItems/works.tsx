/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontSize, Margins, shadow } from '../../style'

interface IWorkItem {
  title: string
  description: string
  url: string
  ogpURL: string
}
interface Props {
  data: {
    menuItemTitle: string
    workItems: IWorkItem[]
  }
}

const Works = (props: Props) => {
  const {
    data: { menuItemTitle, workItems },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      {workItems.map((workItem: IWorkItem) => (
        <WorkItem href={workItem.url}>
          <img src={workItem.ogpURL} alt={workItem.title} />
          <div>
            <h3>{workItem.title}</h3>
            <p>{workItem.description}</p>
          </div>
        </WorkItem>
      ))}
    </Container>
  )
}

export const dataQuery = graphql`
  fragment WorksData on IndexJson {
    works {
      menuItemTitle
      workItems {
        title
        description
        url
        ogpURL
      }
    }
  }
`

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
`

const WorkItem = styled.a`
  display: inline-block;
  img {
    width: 100%;
    height: 165px;
    object-fit: cover;
  }
  div {
    padding: 12px;
    p {
      margin-top: ${Margins.Related};
    }
    h3 {
      font-size: ${FontSize.SubTitle};
    }
  }
  box-shadow: ${shadow};
`
export default Works
