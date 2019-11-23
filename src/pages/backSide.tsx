import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSpring, animated as a } from 'react-spring'
import { FontSize } from '../style'
import CloseIcon from '../images/close.png'

interface Props {
}

const BackSide = (props: Props) => {
  const [isShowModal, showModal] = useState(false)
  const modalStyle = useSpring({
    top: isShowModal ? '0%' : '100%',
    config: {
      mass: 1, tension: 1000, friction: 70,
    },
  })

  return (
    <Container>
      <ItemsContainer>
        <ItemLink onClick={() => showModal(true)}>自己紹介</ItemLink>
        <ItemLink>キャリア</ItemLink>
        <ItemLink>プロダクト</ItemLink>
        <ItemLink>スキルセット</ItemLink>
        <ItemLink>コンタクト</ItemLink>
      </ItemsContainer>
      <a.div style={{
        top: modalStyle.top,
        height: '100%',
        width: '100%',
        position: 'absolute',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
      >
        <CloseButton onClick={() => showModal(false)} src={CloseIcon} />
      </a.div>
    </Container>
  )
}

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
const ItemLink = styled.a`
  font-size: ${FontSize.SubTitle}
`

const CloseButton = styled.img`
  height: 32px;
  width: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
`
export default BackSide
