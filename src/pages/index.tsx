/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { animated, useSpring, config } from 'react-spring'
import queryString from 'query-string'
import Header from '../components/header'
import FrontSide from '../components/frontSide'
import BackSide from '../components/backSide'
import QrCodeBackSide from '../components/qrCodeBackSide'
import useWindowDimentions from '../helpers/useWindowDimensions'
import useCardRotation from '../helpers/useCardRotation'
import '../globalStyle.css'
import '../reset.css'
import { shadow } from '../style'
import Images from '../images'

export default ({ data, location }) => {
  const [hideByBox, setHideByBox] = useState(true)
  const { fromQR } = queryString.parse(location.search)
  const localeData = data.file.childIndexJson
  const { height } = useWindowDimentions()

  const {
    transform, bind, tapAnimation,
  } = useCardRotation(fromQR)

  const { qrCodeOpacity, backSideOpacity } = useSpring(
    {
      qrCodeOpacity: 0,
      backSideOpacity: 1,
      from: { qrCodeOpacity: 1, backSideOpacity: 0 },
      config: config.molasses,
      onRest: () => setHideByBox(false),
    },
  )

  return (
    <>
      <Header data={localeData.siteMetaData} />
      <Container
        style={{
          height,
          padding: '8px',
          maxWidth: '375px',
          maxHeight: '812px',
          margin: 'auto',
        }}
        onClick={tapAnimation}
      >
        {hideByBox && (
        <animated.div style={{
          position: 'absolute',
          opacity: 1,
          height: '100%',
          width: '100%',
          transform: 'translateZ(1px)',
          backgroundColor: 'white',
          opacity: qrCodeOpacity,
          pointerEvents: 'none',
        }}
        />
        )}
        <animated.div
          {...bind()}
          style={{
            transform,
            transformStyle: 'preserve-3d',
            height: '100%',
            width: '100%',
            boxShadow: shadow,
          }}
        >
          <FrontSideContainer>
            <FrontSide data={localeData.frontSide} />
          </FrontSideContainer>
          <BackSideContainer>
            <animated.div style={{ opacity: qrCodeOpacity }}>
              <QrCodeBackSide />
            </animated.div>
            <animated.div style={{ opacity: backSideOpacity, height: '100%' }}>
              <BackSide data={localeData} />
            </animated.div>
          </BackSideContainer>
        </animated.div>
      </Container>
    </>
  )
}

export const query = graphql`
  query Index($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        ...SiteMetaData
        ...FrontSideData
        ...SelfIntroductionData
        ...WorksData
        ...ContactData
        ...CareerData
        ...SkillSetData
      }
    }
  }
`

const Container = styled.div`
  transform: perspective(1000px);
  transform-style: preserve-3d;
`
const FrontSideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-image: url(${Images.paper});
`
const BackSideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-image: url(${Images.paper});
`
