import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuItems from '.'
import data from '../../data/index/ja.json'

storiesOf('MenuItems/SelfIntroduction', module)
  .add('default', () => (
    <MenuItems.selfIntroduction data={data.selfIntroduction} />
  ))
storiesOf('MenuItems/Works', module)
  .add('default', () => (
    <MenuItems.works data={data.works} />
  ))
storiesOf('MenuItems/Contact', module)
  .add('default', () => (
    <MenuItems.contact data={data.contact} />
  ))
storiesOf('MenuItems/Career', module)
  .add('default', () => (
    <MenuItems.career data={data.career} />
  ))
storiesOf('MenuItems/SkillSet', module)
  .add('default', () => (
    <MenuItems.skillSet data={data.skillSet} />
  ))
