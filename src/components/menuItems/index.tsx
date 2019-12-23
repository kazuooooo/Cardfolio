import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'
import contactComponent from './contact'
import careerComponent from './career'
import skillSetComponent from './skillset'

export enum MenuItemKey {
  SelfIntroduction = 'selfIntroduction',
  Career = 'career',
  Works = 'works',
  SkillSet = 'skillSet',
  Contact = 'contact',
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Career]: careerComponent,
  [MenuItemKey.Works]: worksComponent,
  [MenuItemKey.SkillSet]: skillSetComponent,
  [MenuItemKey.Contact]: contactComponent,
}
