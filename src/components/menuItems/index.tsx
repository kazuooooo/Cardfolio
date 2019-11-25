import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'
import contact from './contact'
import career from './career'

export enum MenuItemKey {
  SelfIntroduction = 'selfIntroduction',
  Works = 'works',
  Contact = 'contact',
  Career = 'career'
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Works]: worksComponent,
  [MenuItemKey.Contact]: contact,
  [MenuItemKey.Career]: career,
}
