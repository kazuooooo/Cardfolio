import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuItems from '.'
import data from '../../data/components.json'
import { globalStyle } from '../../style'

console.log('globalStyle: ', globalStyle)

storiesOf('MenuItems/SelfIntroduction', module)
  .add('default', () => (
    <MenuItems.selfIntroduction data={data.selfIntroduction} />
  ))
storiesOf('MenuItems/works', module)
  .add('default', () => (
    <MenuItems.works data={data.works} />
  ))
storiesOf('MenuItems/contact', module)
  .add('default', () => (
    <MenuItems.contact data={data.contact} />
  ))
