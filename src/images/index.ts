// NOTE:
// Not used gatsby Img, because write graphql query every time in load image
// is very verbose and couldn't find good way to make common.
import Facebook from './fb.png'
import Github from './github.png'
import Qiita from './qiita.png'
import Medium from './medium.png'
import Mail from './mail.png'
import Messenger from './messenger.png'
import Profile from './profile.png'
import Paper from './paper.png'

enum Images {
  github = Github,
  qiita = Qiita,
  medium = Medium,
  facebook = Facebook,
  mail = Mail,
  messenger = Messenger,
  profile = Profile,
  paper = Paper
}

export default Images
