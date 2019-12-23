/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontSize, Margins, shadow } from '../../style'

interface IWorkCategory {
  categoryTitle: string,
  workItems: IWorkItem[]
}
interface IWorkItem {
  title: string
  description: string
  url: string
  ogpImageURL: string
}
interface Props {
  data: {
    menuItemTitle: string
    categories: IWorkCategory[]
  }
}

const Works = (props: Props) => {
  const {
    data: { menuItemTitle, categories },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      {
        categories.map((category: IWorkCategory) => <Category category={category} />)
      }
    </Container>
  )
}

const Category = ({ category }: { category: IWorkCategory}) => (
  <CategoryItem>
    <h2>{category.categoryTitle}</h2>
    { category.workItems.map((workItem: IWorkItem) => (
      <WorkItem key={workItem.title} href={workItem.url}>
        <img src={workItem.ogpImageURL} alt={workItem.title} />
        <div>
          <h3>{workItem.title}</h3>
          <p>{workItem.description}</p>
        </div>
      </WorkItem>
    ))}
  </CategoryItem>
)

export const dataQuery = graphql`
  fragment WorksData on IndexJson {
    works {
      menuItemTitle
      categories {
        categoryTitle
        workItems {
          title
          description
          url
          ogpImageURL
        }
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

const CategoryItem = styled.section`
  (:first-of-type) {
    margin-top: ${Margins.LittleRelated};
  }
  :not(:first-of-type) {
    margin-top: 52px;
  }
`

const WorkItem = styled.a`
  :not(:first-of-type) {
    margin-top: ${Margins.LittleRelated};
  }
  display: inline-block;
  width: 100%;
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
