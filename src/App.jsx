
import './App.css';

import React, { useEffect, useRef, useState } from 'react'

function ImageSlider () {

  const images = [
    'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
    'https://images.unsplash.com/photo-1485970247670-34cd80f5a996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D'
  ];

  const [index, setIndex] = useState(0);
  const interval = useRef(null);

  const resetInterval = ()=>{
    clearInterval(interval.current);
     interval.current = setInterval(()=>{
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }


  useEffect(()=>{
    resetInterval();

    return () => clearInterval(interval.current);
  }, [images.length]);

  
  const handleRightClick = ()=>{
    setIndex((prevIndex)=> (prevIndex + 1) % images.length );
    resetInterval();
  }

  const handleLeftClick = () =>{
    setIndex((prevIndex) => (prevIndex -1 + images.length) % images.length);
  }
  return (
    <div className='carousel'>
      <div className="image-container"
            style={{transform:`translateX(${-index * 500}px)`}}>
        {images.map((src, i)=>(
          <img key={i} src={src} alt={`Slide ${i}`}/> 
        )
          )}
      </div>
      <div className="buttons-container">
      <button id="left" className="btn" onClick={handleLeftClick}>Prev</button>
        <button id="right" className="btn" onClick={handleRightClick}>Next</button>
      </div>    
    </div>
  )
}

export default ImageSlider;

