/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import Images from '../../images'
import { Margins, FontSize } from '../../style'

interface Social {
  name: string
  id: string
  url: string
}

interface Props {
  data: {
    description: string
    menuItemTitle: string
    socialURLs: Social[]
  }
}

const SelfIntroduction = (props: Props) => {
  const { description, menuItemTitle, socialURLs } = props.data
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container>
      <InnerContainer>
        <Title>{menuItemTitle}</Title>
        <Img css={IconStyle} fixed={data.file.childImageSharp.fixed} />
        <SocialLinks>
          {socialURLs.map((social: Social) => (
            <SocialLink key={social.name} href={social.url} target="_blank">
              <img src={Images[social.name]} alt={social.name} />
            </SocialLink>
          ))}
        </SocialLinks>
        <Description>{description}</Description>
      </InnerContainer>
    </Container>
  )
}

export const dataQuery = graphql`
  fragment SelfIntroductionData on IndexJson {
    selfIntroduction {
      menuItemTitle
      description
      socialURLs {
        name
        url
      }
    }
  }
`

const Container = styled.div`
  padding: 24px;
`
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`
const Title = styled.h1``

const IconStyle = css`
  margin-top: ${Margins.NotRelated};
  widht: 200px;
  height: 200px;
`
const Description = styled.p`
  margin-top: ${Margins.LittleRelated};
`
const SocialLinks = styled.section`
  margin-top: ${Margins.LittleRelated};
  display: flex;
  width: 120px;
  justify-content: space-between;
`
const SocialLink = styled.a`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: ${FontSize.Supplemnet};
  img {
    height: 100%;
  }
`
export default SelfIntroduction

// NOTE 画像部分こんな感じでできなくもない
// allFile(filter: {relativePath: {regex: "/socialIcons/"}}) {
//   edges {
//     node {
//       id
//       childImageSharp {
//         fixed(width: 100, height: 100){
//           width
//           originalName
//           base64
//         }
//       }
//     }
//   }
// }
