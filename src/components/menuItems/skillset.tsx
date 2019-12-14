/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
// import { HorizontalBar } from 'react-chartjs-2'
import { graphql } from 'gatsby'
import { Margins } from '../../style'

interface ISkillData {
  categoryTitle: string
  data: any
  toolTipData: string[]
}

interface Props {
  data: {
    menuItemTitle: string
    skillDatum: ISkillData[]
  }
}

const SkillSet = (props: Props) => {
  const {
    data: { menuItemTitle, skillDatum },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      {skillDatum.map(({ categoryTitle, data, toolTipData }) => (
        <>
          <CategoryTitle>{categoryTitle}</CategoryTitle>
          {/* <HorizontalBar
            data={data}
            options={{
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    display: true,
                    ticks: {
                      suggestedMin: 0,
                      suggestedMax: 5,
                      stepSize: 1,
                      callback: (value, index, values) => `Lv${value}`,
                    },
                  },
                ],
              },
              tooltips: {
                callbacks: {
                  label(tooltipItem, data) {
                    return toolTipData[+tooltipItem.index]
                  },
                },
              },
            }}
          /> */}
        </>
      ))}
    </Container>
  )
}

export const dataQuery = graphql`
  fragment SkillSetData on IndexJson {
    skillSet {
      menuItemTitle
      skillDatum {
        categoryTitle
        data {
          labels
          datasets {
            backgroundColor
            data
          }
        }
        toolTipData
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

const CategoryTitle = styled.h2`
  margin-top: 36px;
  margin-bottom: ${Margins.Related};
`

export default SkillSet
