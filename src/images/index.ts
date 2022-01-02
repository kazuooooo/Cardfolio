// NOTE:
// Not used gatsby Img, because write graphql query every time in load image
// is very verbose and couldn't find good way to make common.
import DevTo from './devto.png'
import Facebook from './fb.png'
import Github from './github.png'
import Mail from './mail.png'
import Medium from './medium.png'
import Messenger from './messenger.png'
import Paper from './paper.png'
import Profile from './profile.png'
import Qiita from './qiita.png'
import StackOverflow from './stackoverflow.png'
import Twitter from './twitter.png'
import Zenn from './zenn.png'

enum Images {
  github = Github,
  qiita = Qiita,
  medium = Medium,
  facebook = Facebook,
  mail = Mail,
  messenger = Messenger,
  profile = Profile,
  paper = Paper,
  twitter = Twitter,
  zenn = Zenn,
  devto = DevTo,
  stackoverflow = StackOverflow
}

export default Images
