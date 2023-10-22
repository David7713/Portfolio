import React from 'react'
import "./Portfolio.css"
import data from './data'
import {BsArrowRightShort} from 'react-icons/bs'
const Portfolio = () => {
  return (
    <div className='portfolio-part' id='Portfolio'>

<div className='portfolio-header-text'>
        <h2>Portfolio</h2>
        <span>Most Recent Works ⭐️</span>
      </div>


<div className='project-container'>
      {data.map((item)=>{
        return     <div className='project-card' key={item.id}>
        <div className='project-image-div'>
        <img src={item.image} alt='' className='project-image'></img></div>
        <h3 className='project-title'>{item.title}</h3>
        <p className='project-description'>{item.description}</p>
            <div className='project-button-container'>
            <a href={item.link} target='_blank' className='project-button'> Demo <BsArrowRightShort className='project-button-icon'></BsArrowRightShort></a>
        <a href={item.github} target='_blank' className='project-button'>Code <BsArrowRightShort className='project-button-icon'></BsArrowRightShort></a>
            </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Portfolio