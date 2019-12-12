/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { animated, useTrail } from 'react-spring'
import queryString from 'query-string'
import FrontSide from '../components/frontSide'
import BackSide from '../components/backSide'
import QrCodeBackSide from '../components/qrCodeBackSide'
import useWindowDimentions from '../helpers/useWindowDimensions'
import useCardRotation from '../helpers/useCardRotation'

import '../globalStyle.css'
import '../reset.css'

export default ({ data, location }) => {
  // constatns

  const { fromQR } = queryString.parse(location.search)
  const localeData = data.file.childIndexJson
  const { height } = useWindowDimentions()
  const { transform, bind } = useCardRotation(fromQR)
  // const [initialAnimated, setInitialAnimated] = useState(!fromQR)
  // const [trail, setAnimation, stop] = useTrail(1, () => ({
  //   qrOpacity: 1,
  //   transform: `rotateY(${initialDegree}deg)`,
  //   backSideOpacity: 0,
  // }))
  // const trailProps = trail[0]
  // const qrOpacity = trailProps.opacity
  // const backsideOpacity = 1 - qrOpacity

  // TODO: 回転周りのリファクタリング

  // useEffect(() => {
  //   if (!initialAnimated) {
  //     // ロード時のアニメーション
  //     setLastDegree(180)
  //     set({ transform: `rotateY(${180})` })
  //     setAnimation({ qrOpacity: 0, backSideOpacity: 1 })
  //     setInitialAnimated(true)
  //   }
  // })


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
          <FrontSideContainer>
            <FrontSide data={localeData.frontSide} />
          </FrontSideContainer>
          <BackSideContainer>
            <QrCodeBackSide />
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
