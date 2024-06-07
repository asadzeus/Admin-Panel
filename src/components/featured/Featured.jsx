import './featured.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Featured() {
  return (
    <div className='featured'>
      <div className="ftop">
        <h1 className="ftitle">Total Revenue</h1>
        <MoreVertIcon className='icon'/>
      </div>
      <div className="fbottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="ftitle2">Total sales made today</p>
        <p className="famount">$420</p>
        <p className="fdesc">Previous transactions processing. Last payments may not be included</p>

        <div className="summary">
        <div className="sitem">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon/>
              <div className="resultAmount">14.2k</div>
            </div>
          </div>
          <div className="sitem">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon/>
              <div className="resultAmount">12.5k</div>
            </div>
          </div>
          <div className="sitem">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon/>
              <div className="resultAmount">11.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
