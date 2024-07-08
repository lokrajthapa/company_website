import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        
        <div className='hero-text'>
            <h1> We ensure that we provide best software solution</h1>
            <p>
                We have been giving a best software solution around the world.
                We have been giving a best software solution around the world.
                We have been giving a best software solution around the world 
           </p>
           <button className='btn'> Explore more <img src={dark_arrow} alt=''/> </button>
        </div>
      </div>
  )
}

export default Hero