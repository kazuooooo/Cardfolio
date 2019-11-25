import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import FrontSide from './frontSide'
import BackSide from './backSide'
import '../globalStyle.css'
import '../reset.css'


export default () => {
  const [flipped, setFlipped] = useState(true)
  const frontSideStyle = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(200px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const backSideStyle = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(200px) rotateY(${flipped ? 0 : -180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to MatsumotoKazuya.jp!</title>
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
        <a.div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: frontSideStyle.opacity,
          transform: frontSideStyle.transform,
          border: '1px solid black',
        }}
        >
          <FrontSide />
        </a.div>
        <a.div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: backSideStyle.opacity,
          transform: backSideStyle.transform,
          border: '1px solid black',
        }}
        >
          <BackSide />
        </a.div>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`
