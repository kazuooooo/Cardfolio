import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSpring, animated as a } from 'react-spring'
import { Global, css } from '@emotion/core'
import { FontSize, shadow, Margins } from '../style'
import CloseIcon from '../images/close.png'
import MenuItems, { MenuItemKey } from './menuItems'
import Images from '../images'

const BackSide = ({ data }) => {
  const [currentModal, setModal] = useState<MenuItemKey | null>(null)
  const [showModal, setShowModal] = useState(false)
  const modalStyle = useSpring({
    top: currentModal ? '5%' : '100%',
    config: {
      mass: 1,
      tension: 500,
      friction: 30,
    },
  })

  const onClickMenuItem = (event: MouseEvent, modal: MenuItemKey | null) => {
    event.stopPropagation()
    setShowModal(true)
    setModal(modal)
  }

  const onClickColseButton = (event: MouseEvent) => {
    event.stopPropagation()
    setModal(null)
    // Wait until animation ends
    setTimeout(() => setShowModal(false), 500)
  }
  return (
    <Container>
      {// HACK: To hide modal under container disable scroll.
      !currentModal && (
        <Global
          styles={css`
            body {
              overflow: hidden;
            }
          `}
        />
      )
}
      <ItemsContainer>
        {Object.values(MenuItemKey).map((val) => (
          <MenuItemLink key={val} onClick={(event) => onClickMenuItem(event, val)}>
            {data[val].menuItemTitle}
          </MenuItemLink>
        ))}
      </ItemsContainer>
      {showModal && (
      <a.div
        style={{
          top: modalStyle.top,
          height: '95%', // 100% - 5%
          width: '100%',
          position: 'absolute',
          backgroundColor: 'white',
          boxShadow: shadow,
          overflow: 'scroll',
          backgroundImage: `url(${Images.paper})`,
          zIndex: 1,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton onClick={(event) => onClickColseButton(event)} src={CloseIcon} />
        {currentModal && MenuItems[currentModal]({ data: data[currentModal] })}
      </a.div>
      )}
      {/* It's not mondatory, but I'm glad to keep this credit which link to cardfolio */}
      <Credit onClick={(event) => event.stopPropagation()} href="https://github.com/kazuooooo/Cardfolio" target="_blank">
        created by cardfolio
      </Credit>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const ItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
const MenuItemLink = styled.a`
  font-size: ${FontSize.SubTitle};
  margin-top: ${Margins.LittleRelated};
  /*
  Prevent text selection to bother rotation on PC
  */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`

const CloseButton = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
`

const Credit = styled.a`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: ${FontSize.Supplemnet};
  /*
  Prevent text selection to bother rotation on PC
  */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`
export default BackSide
