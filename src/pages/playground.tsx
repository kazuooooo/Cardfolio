import React, { useState } from 'react'
import styled from '@emotion/styled'

export default () => {
  console.log('of')
  return (
    <Container>
      <Card>
        <FrontSide>
          <p>表</p>
        </FrontSide>
        <BackSide>
          <p>裏</p>
        </BackSide>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  transform: perspective(1000px);
`

const Card = styled.div`
  transform-style: preserve-3d;
  height: 300px;
  width: 300px;
  position: relative;
`
const FrontSide = styled.div`
  height: 100%;
  width: 100%;
  background-color: yellow;
  position: absolute;
  backface-visibility: hidden;
`
const BackSide = styled.div`
  height: 100%;
  width: 100%;
  background-color: green;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
