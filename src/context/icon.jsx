import bulbIcon from '../assets/bulb_icon.svg'
import chessIcon from '../assets/chess_icon.svg'
import devIcon from '../assets/dev_icon.svg'
import gitIcon from '../assets/git_icon.svg'
import linkIcon from '../assets/link_icon.svg'
import linkedinIcon from '../assets/linkedin_icon.svg'
import mailIcon from '../assets/mail_icon.svg'
import mapsIcon from '../assets/maps_icon.svg'
import messageIcon from '../assets/message_icon.svg'
import mouseIcon from '../assets/mouse_icon.svg'
import peopleIcon from '../assets/people_icon.svg'
import rubikIcon from '../assets/rubik_icon.svg'
import sendIcon from '../assets/send_icon.svg'
import skateIcon from '../assets/skate_icon.svg'
import statisticsIcon from '../assets/statistics_icon.svg'
import tableTenisIcon from '../assets/tableTenis_icon.svg'
import talkIcon from '../assets/talk_icon.svg'
import trainIcon from '../assets/train_icon.svg'
import downArrowIcon from '../assets/downArrow_icon.svg'
import userIcon from '../assets/user_icon.svg'

const iconAssets = {
  bulb: bulbIcon,
  chess: chessIcon,
  code: devIcon,
  github: gitIcon,
  link: linkIcon,
  linkedin: linkedinIcon,
  mail: mailIcon,
  location: mapsIcon,
  chat: messageIcon,
  mouse: mouseIcon,
  team: peopleIcon,
  rubik: rubikIcon,
  send: sendIcon,
  skate: skateIcon,
  chart: statisticsIcon,
  paddle: tableTenisIcon,
  talk: talkIcon,
  train: trainIcon,
  downArrow: downArrowIcon,
  user: userIcon,
}

export const Icon = ({ name, size = 24, light = false }) => {
  const className = `asset-icon${light ? ' asset-icon-light' : ''}`

  return (
    <img
      className={className}
      src={iconAssets[name]}
      alt=""
      aria-hidden="true"
      style={{ width: size, height: size }}
    />
  )
}
