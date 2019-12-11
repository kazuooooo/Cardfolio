import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import QrCodeImage from '../images/qr-code.png'

const QrCodeBackSide = () => {
  const [className, setClassName] = useState('')
  useEffect(() => {
    setClassName('hide')
  })
  return (
    <QrCodeContainer className={className}>
      <QrCode src={QrCodeImage} alt="qr-code" />
    </QrCodeContainer>
  )
}

const QrCode = styled.img`
  width: 36%;
`
const QrCodeContainer = styled.div`
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.hide {
    opacity: 0;
  }
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  opacity: 1;
`

export default QrCodeBackSide
