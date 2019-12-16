/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
// import { HorizontalBar } from 'react-chartjs-2'
import { graphql } from 'gatsby'
import { Chart } from 'react-google-charts'
import { Margins } from '../../style'

interface ISkillData {
  categoryTitle: string
  dataSets: any[]
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
      {skillDatum.map(({ categoryTitle, dataSets }) => (
        <ChartContainer key={categoryTitle}>
          <CategoryTitle>{categoryTitle}</CategoryTitle>
          <Chart
            width="320px"
            height="300px"
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Element',
                'Lv',
                { role: 'style' },
                { role: 'annotation' },
              ],
              ...dataSets.map(({
                label, level, barColor, annotation,
              }) => [label, level, barColor, annotation]),
            ]}
            options={{
              backgroundColor: { fill: 'transparent', opacity: 0.1 },
              width: 320,
              height: 300,
              bar: { groupWidth: '70%' },
              legend: { position: 'none' },
              chartArea: {
                height: '80%',
                width: '70%',
              },
              hAxis: {
                minValue: 0,
                maxValue: 5,
                format: 'decimal',
                gridlines: {
                  count: 5,
                },
              },
            }}
          />
        </ChartContainer>
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
        dataSets {
          label
          level
          barColor
          annotation
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

const ChartContainer = styled.div``

const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
`

const CategoryTitle = styled.h2`
  margin-top: 36px;
  margin-bottom: ${Margins.Related};
`

export default SkillSet
