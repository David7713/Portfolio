import React from 'react'
import './Footer.css'

import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className='footer-part'>


        <h1>David</h1>
        <ul>
          <a href='#Home'><li>Home</li></a>
          <a href='#About'> <li>About</li></a>
          <a href='#Education'><li>Education</li></a>
          <a href='#Portfolio'><li>Portfolio</li></a>
          <a href='#Contact'><li>Contact</li></a>
        </ul>



        <ul className='footer-part-icons'>
          <li>  <a href='https://github.com/David7713' target='_blank'><BsGithub></BsGithub></a></li>
          <li>  <a href='https://www.linkedin.com/in/david-harutyunyan-2ab756238/' target='_blank'><BsLinkedin></BsLinkedin> </a></li>
          <li>  <a href='https://www.instagram.com/davo1301/' target='_blank'><BsInstagram></BsInstagram> </a></li>
        </ul>

        <span className='allrights-reserved'>© David 2023 All Rights Reserved</span>

      </div>


    </div>
  )
}

export default Footer