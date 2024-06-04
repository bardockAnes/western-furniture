import React from 'react'
import '../styles.css'
import { useTranslations } from 'next-intl';

function SpaceLandText() {
  const t = useTranslations('SpaceLandText');
  
  return (
    <div className='spacelandtext'>
      <div className='sltt'>{t('sltt')}</div>
      <div className='sltd'>{t('sltd')}</div>
      <div className='sltbs'>
        <button className='sltb'>{t('sltbone')}</button>
        <button className='sltb'>{t('sltbtwo')}</button>
      </div>
    </div>
  )
}

export default SpaceLandText