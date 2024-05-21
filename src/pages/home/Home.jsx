import React from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homecontainer">container</div>
    </div>

  )
}
