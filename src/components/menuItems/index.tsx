import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'
import contact from './contact'

export enum MenuItemKey {
  SelfIntroduction = 'selfIntroduction',
  Works = 'works',
  Contact = 'contact'
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Works]: worksComponent,
  [MenuItemKey.Contact]: contact,
}
