import React from 'react'
import { useState } from 'react'
import './NavigationBar.css'

import { SlMenu } from 'react-icons/sl'
import { FaTimes } from 'react-icons/fa'

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div>

      <div className='nav-bar-container'>
        <a href='#Home'><div className='logo-part'>Davit</div></a>
        <ul className={isMobile ? "pages-mobile" : 'pages'}

          onClick={() => setIsMobile(false)}  >
          <a href="#Home"> <li>Home</li></a>
          <a href='#About'> <li>About</li></a>
          <a href='#Education'> <li>Education</li></a>
          <a href='#Portfolio'>  <li>Portfolio</li></a>
          <a href='#Contact'>  <li>Contact</li></a>

        </ul>



        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes></FaTimes> : <SlMenu></SlMenu>}
        </button>
      </div>

    </div>
  )
}

export default NavigationBar