/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Margins } from '../../style'

interface ICareerItem {
  year: string
  title: string
  description: string
}

interface Props {
  data: {
    menuItemTitle: string
    description: string
    careerItems: ICareerItem[]
  }
}

const Career = (props: Props) => {
  const {
    data: { menuItemTitle, careerItems },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      <TimeLine />
      <CareerItemList>
        {careerItems.map((career) => (
          <CareerItem key={career.title}>
            <CareerItemCircleWithYear>
              <CareerItemCircle />
              <CareerItemYear>{career.year}</CareerItemYear>
            </CareerItemCircleWithYear>
            <CareerItemTextBox>
              <h2>{career.title}</h2>
              <p>{career.description}</p>
            </CareerItemTextBox>
          </CareerItem>
        ))}
      </CareerItemList>
    </Container>
  )
}

export const dataQuery = graphql`
  fragment CareerData on IndexJson {
    career {
      menuItemTitle
      careerItems {
        year
        title
        description
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
const TimeLine = styled.div`
  width: 3px;
  background-color: #707070;
  position: absolute;
  height: 100%;
  left: 60px;
  border-radius: 1px;
`
const CareerItemList = styled.div`
  position: absolute;
  left: 52px;
`
const CareerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin-top: 36px;
`
const CareerItemCircleWithYear = styled.div`
  display: flex;
`

const CareerItemCircle = styled.div`
  margin-top: 6px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: #13c782;
`
const CareerItemYear = styled.p`
  margin-left: ${Margins.Related};
`
const CareerItemTextBox = styled.div`
  margin-left: 26px;
  max-width: 260px;
  p {
    overflow-wrap: break-word;
    line-height: 1.5em;
  }
`
export default Career
