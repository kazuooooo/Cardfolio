/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import FrontSide from '../components/frontSide'
import BackSide from '../components/backSide'
import QrCodeBackSide from '../components/qrCodeBackSide'
import '../globalStyle.css'
import '../reset.css'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useWindowDimentions from '../helpers/useWindowDimensions'
import queryString from 'query-string'

export default ({ data, location }) => {
  const { fromQrCode, deg } = queryString.parse(location.search)
  const rotateDegreeToDragWindowWidth = 270
  const localeData = data.file.childIndexJson
  const initialDegree = deg ? +deg : 0
  const [{ transform }, set] = useSpring(() => ({ transform: `rotateY(${initialDegree}deg)` }))
  const [lastDegree, setLastDegree] = useState(initialDegree)

  const { height, width } = useWindowDimentions()

  // TODO: 回転周りのリファクタリング
  const calcDegree = (mx: number) => {
    const degree = lastDegree + rotateDegreeToDragWindowWidth * (mx / width)
    return degree
  }

  const calcResetDegree = (degree: number) => {
    // 第一象限 * 第三象限 : 角度を減らす
    // 第二象限 * 第四象限 : 角度を増やす
    const sin = Math.sin((degree * Math.PI) / 180)
    const cos = Math.cos((degree * Math.PI) / 180)

    const divResult = degree / 90
    if (sin * cos > 0) {
      return Math.floor(divResult) * 90
    }
    return Math.ceil(divResult) * 90
  }

  const bind = useDrag(({ down, movement: [mx], last }) => {
    const degree = calcDegree(mx)
    if (down) {
      set({ transform: `rotateY(${degree})` })
      return degree
    }

    if (last) {
      // Rotate to reset degree when use drag ends.
      const resetDegree = calcResetDegree(degree)
      setLastDegree(resetDegree)
      set({ transform: `rotateY(${resetDegree})` })
    }
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to MatsumotoKazuya.jp!</title>
        <script>
          {`
            (function(d) {
              var config = {
                kitId: 'jwd1shg',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
            `}
        </script>
      </Helmet>
      <Container style={{ height }}>
        <animated.div
          {...bind()}
          style={{
            transform,
            transformStyle: 'preserve-3d',
            height: '100%',
            width: '100%',
            border: '1px solid black',
          }}
        >
          {fromQrCode && <QrCodeBackSide />}
          <FrontSideContainer>
            <FrontSide data={localeData.frontSide} />
          </FrontSideContainer>
          <BackSideContainer>
            <BackSide data={localeData} />
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
`
const BackSideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
