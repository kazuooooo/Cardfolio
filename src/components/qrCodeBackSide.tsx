import React from 'react'
import styled from '@emotion/styled'
import QrCodeImage from '../images/qr-code.png'

const QrCodeBackSide = () => (
  <QrCodeContainer>
    <QrCode src={QrCodeImage} alt="qr-code" />
  </QrCodeContainer>
)

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
  background-color: white;
`

export default QrCodeBackSide
