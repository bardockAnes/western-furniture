'use client';
import React from 'react'
import  '../../../public/my.jpg'
import Image from 'next/image';
import ImageSrc from '../../../public/my.jpg'

function SpaceLandImage() {
  return (
    <div className='spi'>
      <Image src={ImageSrc} alt='imagesrc' width={400} height={400}/>
    </div>
  )
}

export default SpaceLandImage