import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'
import contactComponent from './contact'
import careerComponent from './career'
import skillSetComponent from './skillset'

export enum MenuItemKey {
  SelfIntroduction = 'selfIntroduction',
  Works = 'works',
  Contact = 'contact',
  Career = 'career',
  SkillSet = 'skillSet',
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Works]: worksComponent,
  [MenuItemKey.Contact]: contactComponent,
  [MenuItemKey.Career]: careerComponent,
  [MenuItemKey.SkillSet]: skillSetComponent,
}
