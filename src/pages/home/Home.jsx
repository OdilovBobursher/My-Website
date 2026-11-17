import React, { useState } from 'react'
import './Home.css'
import Products from '../Products/Products'

const Home = () => {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    const [index, setIndex] = useState(0);
  
    function showSlide(i) {
      setIndex(i);
    }
  
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % images.length);
    };
  
    const prevSlide = () => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
  return (
    <>
    <h1>Home</h1>
    <div className="slider">
      <button className="btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[index]} alt="Slayd" className="slide-image" />
      <button className="btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    <Products />
    </>
  )
}

export default Home