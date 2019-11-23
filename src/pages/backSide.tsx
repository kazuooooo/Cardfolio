import React from 'react'
import styled from '@emotion/styled'
import { FontSize } from '../style'


interface Props {
}

const BackSide = (props: Props) => (
  <Container>
    <JobTitle>デザイナー</JobTitle>
    <Name>裏です</Name>
  </Container>
)

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

export default BackSide
