'use clinet';

import React from 'react'
import './styles.css'
import SpaceLandText from './SpaceLand/SpaceLandText'
import SpaceLandImage from './SpaceLand/SpaceLandImage'

function SpaceLand({locale}:any) {
  return (
    <section className='spaceland'>
      <SpaceLandText locale={locale} />
      <SpaceLandImage />
    </section>
  )
}

export default SpaceLand