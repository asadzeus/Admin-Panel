import  './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import avatar from '../../assets/avatar.jpg'


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='search...' className='searchbar'/>
            <SearchIcon/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon/>
              English
            </div>
            <div className="item">
              <DarkModeIcon/>
            </div>
            <div className="item">
              <FullscreenExitIcon/>
            </div>
            <div className="item">
              <NotificationsIcon/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleIcon/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <FormatListBulletedIcon/>
            </div>
            <div className="item">
              <img  src={avatar} alt="" className='avatar'/>
            </div>
          </div>
        </div>
    </div>
  )
}

