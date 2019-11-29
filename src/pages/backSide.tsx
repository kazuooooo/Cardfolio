import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSpring, animated as a } from 'react-spring'
import { graphql, useStaticQuery } from 'gatsby'
import { Global, css } from '@emotion/core'
import { FontSize, shadow, Margins } from '../style'
import CloseIcon from '../images/close.png'
import MenuItems, { MenuItemKey } from '../components/menuItems'

const BackSide = () => {
  const [currentModal, showModal] = useState<MenuItemKey | null>(
    MenuItemKey.Works,
  )
  const modalStyle = useSpring({
    top: currentModal ? '5%' : '100%',
    config: {
      mass: 1,
      tension: 500,
      friction: 70,
    },
  })

  // Load all data here, migth be better way...
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        selfIntroduction {
          menuItemTitle
          description
          socialURLs {
            name
            id
            url
          }
        }
        works {
          menuItemTitle
          workItems {
            title
            description
            url
            ogpURL
          }
        }
        contact {
          menuItemTitle
          description
          contactItems {
            type
            label
            href
          }
        }
        career {
          menuItemTitle
          careerItems {
            year
            title
            description
          }
        }
        skillSet {
          menuItemTitle
          skillDatum {
            categoryTitle
            data {
              labels
              datasets {
                backgroundColor
                data
              }
            }
            toolTipData
          }
        }
      }
    }
  `).dataJson
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
          <MenuItemLink onClick={() => showModal(val)}>
            {data[val].menuItemTitle}
          </MenuItemLink>
        ))}
      </ItemsContainer>
      <a.div
        style={{
          top: modalStyle.top,
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundColor: 'white',
          boxShadow: shadow,
        }}
      >
        <CloseButton
          onClick={(e) => {
            e.stopPropagation()
            showModal(null)
          }}
          src={CloseIcon}
        />
        {currentModal && MenuItems[currentModal]({ data: data[currentModal] })}
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
  font-size: ${FontSize.SubTitle};
  margin-top: ${Margins.LittleRelated};
`

const CloseButton = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
`
export default BackSide
