import './widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { red } from '@mui/material/colors';

export default function Widget( {type} ) {
  
  let data;
  // temp 
  const amount = 100;
  const diff = 20;

  switch (type){
     
    case "user":
      data = {
        title : "Users",
        ismoney: false,
        link: "See all users",
        icon: (<PersonIcon className='icon' 
        style={{
          color:"crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)"
        }}/>)
      };
      break;
    case "order":
      data = {
        title : "Orders",
        ismoney: false,
        link: "View all orders",
        icon: (<ShoppingCartIcon className='icon'
        style={{
          color:"goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)"
        }}
        />)
      };
      break;
    case "earning":
      data = {
        title : "Earning",
        ismoney: true,
        link: "View net earnings",
        icon: (<AttachMoneyIcon className='icon'
        style={{
          color:"green",
          backgroundColor: "rgba(0, 128, 0, 0.2)"
        }}
        />)
      };
      break;
    case "balance":
      data = {
        title : "Balance",
        ismoney: true,
        link: "See details",
        icon: (<AccountBalanceWalletIcon className='icon'
        style={{
          color:"purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)"
        }}
        />)
      };
      break;

    default:
      break;
  }




  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="wcounter">{data.ismoney && "$" } {amount}</span>
        <span className="link">{data.link}</span>
        </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon/>
          {diff} %</div>
          {data.icon}
      </div>
    </div>
  )
}
