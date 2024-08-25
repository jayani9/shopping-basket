import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
           <div className="quality-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
            <div>Latest Collection</div>
                <img src={arrow} alt="" />
        </div>
        </div>
        
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>

  )
}

export default Hero