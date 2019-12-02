/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import FrontSide from '../components/frontSide'
import BackSide from '../components/backSide'
import '../globalStyle.css'
import '../reset.css'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'

export default ({ data }) => {
  const localeData = data.file.childIndexJson
  const [{ transform }, set] = useSpring(() => ({ transform: 'rotateY(0deg)' }))
  const [lastDegree, setLastDegree] = useState(0)

  // console.log('degree,: ', degree)
  // const [flipped, setFlipped] = useState(false)

  // * 指を離して再度タッチした際に角度が元に戻ってしまう
  // *
  const calcDegree = (mx) => {
    const width = window.innerWidth
    const degree = lastDegree + 360 * (mx / width)
    return degree
  }

  // const calcResetDegree = () => {
  //   console.log('degree: ', degree)
  //   const cos = Math.cos((lastDegree * Math.PI) / 180)
  //   const resetDegree = cos > 0 ? 0 : 180
  //   return degree
  // }
  const bind = useDrag(({ down, movement: [mx], last }) => {
    const degree = calcDegree(mx)
    if (down) {
      set({ transform: `rotateY(${degree})` })
      return degree
    }

    if (last) {
      console.log('lastDegree: ', degree)
      setLastDegree(degree)
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
      <Container>
        <animated.div
          {...bind()}
          style={{
            transform,
            transformStyle: 'preserve-3d',
            height: '100%',
            width: '100%',
          }}
        >
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
  height: 100vh;
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
