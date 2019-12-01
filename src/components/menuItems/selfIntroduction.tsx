/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
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
  return (
    <Container>
      <InnerContainer>
        <Title>{menuItemTitle}</Title>
        <img src={Images.profile} css={IconStyle} alt="profile" />
        <Description>{description}</Description>
      </InnerContainer>
      {/* TODO: GraphQL周り勉強して、画像含めたAPI化 */}
      <SocialLinks>
        {socialURLs.map((social: Social) => (
          <SocialLink href={social.url} target="_blank">
            <img src={Images[social.name]} alt={social.name} />
            <p>{social.id}</p>
          </SocialLink>
        ))}
      </SocialLinks>
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
        id
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
  margin-top: ${Margins.NotRelated};
`
const SocialLinks = styled.section`
  margin-top: 48px;
  display: inline-block;
  float: right;
`
const SocialLink = styled.a`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: ${FontSize.Supplemnet};
  margin-top: ${Margins.Related};
  p {
    margin-left: ${Margins.StronglyRelated};
  }
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
