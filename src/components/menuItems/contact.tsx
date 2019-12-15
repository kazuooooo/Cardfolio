/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontSize, Margins, shadow } from '../../style'
import Images from '../../images'

interface IContactItem {
  type: string
  label: string
  href: string
}

interface Props {
  data: {
    menuItemTitle: string
    description: string
    contactItems: IContactItem[]
  }
}

const Works = (props: Props) => {
  const {
    data: { menuItemTitle, description, contactItems },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      <Description>{description}</Description>
      {contactItems.map((contact) => (
        <ContactLink key={contact.type} href={contact.href} target="_blank">
          <img src={Images[contact.type]} />
          <p>{contact.label}</p>
        </ContactLink>
      ))}
    </Container>
  )
}

export const dataQuery = graphql`
  fragment ContactData on IndexJson {
    contact {
      menuItemTitle
      description
      contactItems {
        type
        label
        href
      }
    }
  }
`

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
`

const Description = styled.p`
  margin-bottom: 28px;
`

const ContactLink = styled.a`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: ${FontSize.Supplemnet};
  margin-top: ${Margins.Related};
  p {
    margin-left: 6px;
  }
  img {
    width: 24px;
  }
`
export default Works
