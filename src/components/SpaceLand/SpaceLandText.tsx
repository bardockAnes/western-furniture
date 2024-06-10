'use client';
import React from 'react'
import '../styles.css'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';



function SpaceLandText({ locale }: any) {
  const t = useTranslations('kitchen_designs');
  const newsh = locale === 'ar' ? 'newsh' : '';
  const ats = locale === 'ar' ? '90px' : '';
  const ads = locale === 'ar' ? '4px' : '';
  return (
    <motion.div className='spacelandtext' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className='sltt' style={{ fontFamily: newsh,lineHeight:ats}} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>{t('title')}</motion.div>
      <motion.div className='sltd' style={{ fontFamily: newsh }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>{t('details')}</motion.div>
      <motion.div className='sltbs' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <motion.button className='sltb' style={{fontFamily:newsh,padding:ads}} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>{t('buttonone')}</motion.button>
        <motion.button className='sltbtwo' style={{fontFamily:newsh,padding:ads}}  whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}><a href='#services'>{t('buttontwo')}</a></motion.button>
      </motion.div>
    </motion.div>
  )
}

export default SpaceLandText;
