import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'

export enum MenuItemKey {
  SelfIntroduction = 'SelfIntroduction',
  Works = 'Works'
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Works]: worksComponent,
}
