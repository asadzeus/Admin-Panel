import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DnsIcon from '@mui/icons-material/Dns';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className="top">
        <span className='logo'>Alper</span>
        </div>

      <div className="center">
        <ul>
          <p className='titles'>MAIN</p>
          <li><DashboardIcon/><span> Dashboard</span></li>
          <p className='titles'>LISTS</p>
          <li><PersonIcon/><span>Users</span></li>
          <li><Inventory2Icon/><span>Products</span></li>
          <li><ShoppingCartIcon/><span>Orders</span></li>
          <li><LocalShippingIcon/><span>Delivery</span></li>
          <p className='titles'>USEFUL</p>
          <li><TrendingUpIcon/><span>Stats</span></li>
          <li><NotificationsActiveIcon/><span>Notifications</span></li>
          <p className='titles'>SERVICE</p>
          <li><DnsIcon/><span>System Health</span></li>
          <li><PsychologyIcon/><span>Logs</span></li>
          <li><SettingsIcon/><span>Settings</span></li>
          <p className='titles'>USER</p>
          <li><AccountCircleIcon/><span>Profile</span></li>
          <li><ExitToAppIcon/><span>Logout</span></li>
        </ul>
      </div>

      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  )
}

export default Sidebar






