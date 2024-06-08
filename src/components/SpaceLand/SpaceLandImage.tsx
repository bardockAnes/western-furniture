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
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <motion.div className='spi' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`image-${index}`}
          width={450}
          height={400}
          className={index === currentIndex ? 'active' : ''}
          style={{ position: 'absolute', top: 0, left: 0, borderRadius: 25, transition: 'opacity 1s ease-in-out' }}
        />
      ))}
    </motion.div>
  );
}

export default SpaceLandImage;
