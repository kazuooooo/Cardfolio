import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSpring, animated as a } from 'react-spring'
import { graphql, useStaticQuery } from 'gatsby'
import { FontSize } from '../style'
import CloseIcon from '../images/close.png'
import { SelfIntroduction } from '../components/menuItems'

interface Props {
}

const BackSide = (props: Props) => {
  const [isShowModal, showModal] = useState(true)
  const modalStyle = useSpring({
    top: isShowModal ? '5%' : '100%',
    config: {
      mass: 1, tension: 500, friction: 70,
    },
  })

  return (
    <Container>
      <ItemsContainer>
        <MenuItemLink onClick={() => showModal(true)}>自己紹介</MenuItemLink>
        <MenuItemLink>キャリア</MenuItemLink>
        <MenuItemLink>プロダクト</MenuItemLink>
        <MenuItemLink>スキルセット</MenuItemLink>
        <MenuItemLink>コンタクト</MenuItemLink>
      </ItemsContainer>
      <a.div style={{
        top: modalStyle.top,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'white',
        boxShadow: '0 -3px 6px rgba(0, 0, 0, 0.3)',
      }}
      >
        <CloseButton
          onClick={(e) => {
            e.stopPropagation()
            showModal(false)
          }}
          src={CloseIcon}
        />
        <SelfIntroduction />
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
const MenuItemLink = styled.a`
  font-size: ${FontSize.SubTitle}
`

const CloseButton = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
`
export default BackSide
