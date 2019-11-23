/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import SocialIcon from '../../images/socialIcons'
import { Margins, FontSize } from '../../style'

interface Props {}

const SelfIntroduction = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dataJson {
      selfIntroduction {
        description
        title
        socialURLs {
          name
          id
          url
        }
      }
    }
  }
`)
  const { selfIntroduction } = data.dataJson
  const { socialURLs } = selfIntroduction
  return (
    <Container>
      <InnerContainer>
        <Title>{selfIntroduction.title}</Title>
        <Img css={IconStyle} fixed={data.file.childImageSharp.fixed} />
        <Description>
          {selfIntroduction.description}
        </Description>
      </InnerContainer>
      {/* TODO: GraphQL周り勉強して、画像含めたAPI化 */}
      <SocialLinks>
        {socialURLs.map((social: { name: string, url: string, id: string }) => (
          <SocialLink href={social.url} target="_blank">
            <img src={SocialIcon[social.name]} alt={social.name} />
            <p>{social.id}</p>
          </SocialLink>
        ))}
      </SocialLinks>
    </Container>
  )
}


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
  margin-top: ${Margins.LittleRelated}
`
const Description = styled.p`
  margin-top: ${Margins.LittleRelated}
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