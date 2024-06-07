import React from 'react'
import '../styles.css'
import { useTranslations } from 'next-intl';

function SpaceLandText() {
  const t = useTranslations('kitchen_designs');
  
  return (
    <div className='spacelandtext'>
      <div className='sltt'>{t('title')}</div>
      <div className='sltd'>{t('details')}</div>
      <div className='sltbs'>
        <button className='sltb'>{t('buttonone')}</button>
        <button className='sltbtwo'>{t('buttontwo')}</button>
      </div>
    </div>
  )
}

export default SpaceLandText