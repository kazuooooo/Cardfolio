import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { globalStyle } from '../style'
import FrontSide from './frontSide'
import BackSide from './backSide'


import './styles.css'

export default () => {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MatsumotoKazuya</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <script>
          {
            `
            (function(d) {
              var config = {
                kitId: 'jwd1shg',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
            `
          }
        </script>
      </Helmet>
      <Container onClick={() => setFlipped(!flipped)}>
        <Global
          styles={globalStyle}
        />
        <a.div style={{ opacity: opacity.interpolate((o) => 1 - o), transform, height: '100%' }}>
          <FrontSide />
        </a.div>
        <a.div class="c front" style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}><BackSide /></a.div>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`
