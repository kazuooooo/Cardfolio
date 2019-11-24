import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'

export enum MenuItemKey {
  SelfIntroduction = 'selfIntroduction',
  Works = 'works'
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Works]: worksComponent,
}
