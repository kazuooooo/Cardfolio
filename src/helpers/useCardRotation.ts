import { useDrag } from 'react-use-gesture'
import { useSpring } from 'react-spring'
import { useState } from 'react'
import useWindowDimensions from './useWindowDimensions'

export default function useCardRotation(fromQR: Boolean) {
  // constants
  const rotateDegreeToDragWindowWidth = 270
  const frontSideDegree = 0
  const backSideDegree = 180

  // If access from QRCode start from BackSide
  const initialDegree = fromQR ? backSideDegree : frontSideDegree

  const { width } = useWindowDimensions()
  const [{ transform }, set] = useSpring(() => ({ transform: `rotateY(${initialDegree}deg)` }))
  const [lastDegree, setLastDegree] = useState(initialDegree)


  const setDegree = (degree: number) => {
    setLastDegree(degree)
    set({ transform: `rotateY(${degree})` })
  }
  // Convert drag distance to rotate degree
  const moveXToDegree = (moveX: number) => rotateDegreeToDragWindowWidth * (moveX / width)
  const calcHorizontalDegreeToReturn = (degree: number) => {
    // Degree is
    //  First or third quadrant: minus degree to horizontal
    //  Second or fouth quadrant: plus degree to horizontal
    //  @see this image
    //  https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/71154/1f77ac34-b670-3539-77f9-8f04fe72e854.png
    const sin = Math.sin((degree * Math.PI) / 180)
    const cos = Math.cos((degree * Math.PI) / 180)
    const isFirstOrThirdQuadrant = sin * cos > 0

    // Degree can be calc by result of divide
    // ex) 135 / 90 = 1.5
    //     Math.ceil(1.5) = 2
    //     90 * 2 = 180
    const divResult = degree / 90
    if (isFirstOrThirdQuadrant) {
      return Math.floor(divResult) * 90
    }
    return Math.ceil(divResult) * 90
  }

  // Synchronize user drag and CardRotation with useDrag
  // @see https://github.com/react-spring/react-use-gesture
  const bind = useDrag(({ down, movement: [moveX], last }) => {
    const degree = lastDegree + moveXToDegree(moveX)
    if (down) {
      // While dragging, a rotation trace user's drag.
      set({ transform: `rotateY(${degree}deg)` })
      return degree
    }

    if (last) {
      // Rotate to reset degree when use drag ends.
      const horizontalDegree = calcHorizontalDegreeToReturn(degree)
      setDegree(horizontalDegree)
    }
  })

  const tapAnimation = (clickEvent) => {
    const centerPosition = width / 2
    if (clickEvent.nativeEvent.x < centerPosition) {
      setDegree(lastDegree - 15)
      setTimeout(() => setDegree(lastDegree), 300)
    } else {
      setDegree(lastDegree + 15)
      setTimeout(() => setDegree(lastDegree), 300)
    }
  }

  return {
    transform, bind, tapAnimation,
  }
}
