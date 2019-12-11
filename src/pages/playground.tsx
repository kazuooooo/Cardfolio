/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { useTrail, animated } from 'react-spring'


export default ({ data, location }) => { // constatns
  const [trail, set, stop] = useTrail(1, () => ({ opacity: 0, color: 'green' }))

  // Update trail
  set({ opacity: 1 })
  set({ color: 'red' })


  return trail.map((props) => <animated.div style={props}>hoge</animated.div>)
}
