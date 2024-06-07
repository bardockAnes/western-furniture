'use client';
import React from 'react'
import  '../../../public/my.jpg'
import Image from 'next/image';
import ImageSrc from '../../../public/3.jpeg'

function SpaceLandImage() {
  return (
    <div className='spi'>
      <Image src={ImageSrc} style={{borderRadius:25}} alt='imagesrc' width={450} height={400} />
    </div>
  )
}

export default SpaceLandImage