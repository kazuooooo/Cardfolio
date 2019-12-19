/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

interface Props {
  data: {
    url: string,
    alt: string
  }
}

const Gif = (props: Props) => {
  const { url, alt } = props.data
  return (
    <Container>
      <img src={url} alt={alt} />
    </Container>
  )
}

export const dataQuery = graphql`
  fragment GifData on IndexJson {
    gif {
      menuItemTitle
      url
      alt
    }
  }
`

const Container = styled.div`
  padding: 24px;
`
export default Gif
