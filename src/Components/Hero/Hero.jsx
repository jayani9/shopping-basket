import React from 'react'
import './Hero.css'
import quality_icon from '../Assets/quality_icon.png'
import arrow from '../Assets/dropdown_icon.png'
import hero from '../Assets/hero_img1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
           <div className="quality-icon">
                <p>new</p>
                <img src={quality_icon} alt="" />
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