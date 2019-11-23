import { render } from 'react-dom';
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import './styles.css';

function Card() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate((o) => 1 - o), transform }} />
      <a.div class="c front" style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }} />
    </div>
  );
}

export default Card;
