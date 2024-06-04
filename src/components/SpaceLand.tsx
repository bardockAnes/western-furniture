'use clinet';

import React from 'react'
import './styles.css'
import SpaceLandText from './SpaceLand/SpaceLandText'
import SpaceLandImage from './SpaceLand/SpaceLandImage'

function SpaceLand() {
  return (
    <section className='spaceland'>
      <SpaceLandText />
      <SpaceLandImage />
    </section>
  )
}

export default SpaceLand