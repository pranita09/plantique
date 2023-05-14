import React, { useState } from 'react';
import './Slider.css'

const slides = [
    "/images/banner-img-1.jpg",
    "/images/banner-img-2.jpg",
    "/images/banner-img-3.jpg",
    "/images/banner-img-4.jpg",
]

function Slider() {
    return (
      <div className='slider-container'>
          <img src={slides[2]} alt='banner'/>
          <button className='slider-btn'>Shop Now</button>
      </div>
   )
}

export default Slider;