import React from 'react'
import styled from '@emotion/styled'
import { FontSize } from '../style'


interface Props {
}

const BackSide = (props: Props) => (
  <Container>
    <ItemsContainer>
      <Item>自己紹介</Item>
      <Item>キャリア</Item>
      <Item>プロダクト</Item>
      <Item>スキルセット</Item>
      <Item>コンタクト</Item>
    </ItemsContainer>
  </Container>
)

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const Item = styled.a`
  font-size: ${FontSize.SubTitle}
`
export default BackSide
