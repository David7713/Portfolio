import React from 'react'
import './About.css'

import aboutImage from '../../assets/profile.jpg'
import CV from '../../assets/David CV.pdf'

import { BsPersonCheckFill } from 'react-icons/bs'
import { AiFillFileText } from 'react-icons/ai'

import Skills from '../../components/Skills/Skills'

const About = () => {
  return (
    <div className='about-part'>

      <div className='about-header-text'>
        <h2>About Me</h2>
        <span>My Introduction <BsPersonCheckFill></BsPersonCheckFill></span>
      </div>

      <div className='about-container' id='About'>

        {/* <div className='about-part-image'>

          <img src={aboutImage}></img>
        </div> */}

        <div className='about-part-text'>

          <Skills></Skills>

          <a download="" href={CV}><button>Download CV <AiFillFileText></AiFillFileText></button></a>


        </div>
      </div>




    </div>
  )
}

export default About