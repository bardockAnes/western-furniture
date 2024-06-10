'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageSrc1 from '../../../public/3.jpeg';
import ImageSrc2 from '../../../public/2.jpeg';
import ImageSrc3 from '../../../public/5.jpg'; // Add more images as needed
import { motion } from 'framer-motion';

function SpaceLandImage() {
  const images = [ImageSrc1, ImageSrc2, ImageSrc3]; // Array of image sources
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
    <div className='image-slider-container' style={{ position: 'relative', width: '450px', height: '400px'}}>
      <motion.div className='spi' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`image-${index}`}
            width={450}
            height={400}
            className={index === currentIndex ? 'active' : ''}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              borderRadius: 25,
              transition: 'opacity 1s ease-in-out',
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </motion.div>
      <motion.div className='arrows' style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button onClick={goToPrevious} style={{ background: 'none',color:"rgba(0,0,0,0.8)", border: 'none', fontSize: '1em', cursor: 'pointer' }}>❮</button>
        <button onClick={goToNext} style={{ background: 'none',color:"rgba(0,0,0,0.8)", border: 'none', fontSize: '1em', cursor: 'pointer' }}>❯</button>
      </motion.div>
      <motion.div className='indicators' style={{ paddingTop:10,width: '100%', display: 'flex', justifyContent: 'center' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {images.map((_, index) => (
            <span key={index} onClick={() => setCurrentIndex(index)} style={{width:"0.1px",height:"0.1px", cursor: 'pointer', padding: '5px', margin: '0 3px', backgroundColor: index === currentIndex ? 'black' : 'grey', borderRadius: '50%' }}></span>
          ))}
        </motion.div>
    </div>

        </>
  );
}

export default SpaceLandImage;
