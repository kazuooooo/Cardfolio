import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSpring, animated, config } from 'react-spring'
import QrCodeImage from '../images/qr-code.png'

const QrCodeBackSide = () => {
  const { opacity } = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: config.molasses,
  })

  return (
    <animated.div style={{ opacity }}>
      <Container>
        <QrCode src={QrCodeImage} alt="qr-code" />
      </Container>
    </animated.div>
  )
}

const QrCode = styled.img`
  width: 36%;
`
const Container = styled.div`
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default QrCodeBackSide
