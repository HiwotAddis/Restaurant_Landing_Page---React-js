import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'
function About() {
  return (
    <div id= "about" className='about-section-container'>
        <div className='about-background-image-container'>
            <img src= {AboutBackground} alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img src= {AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet consecteur. bdchjbjbkjnv jbjc jd jdvj qsidji hgvsrwdpsmkmx kjsiojks  bxvytgdyw yugdvva b gvag.</p>
            <p className='primary-text'>Non tincidunt magna non et elit. Dolor nbcdbh xgfcvgx gsvxh suhiet kjkmzm jj.</p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
      
    </div>
  )
}

export default About
