'use client';
import React from 'react'
import '../styles.css'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

function SpaceLandText() {
  const t = useTranslations('kitchen_designs');

  return (
    <motion.div className='spacelandtext' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className='sltt' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>{t('title')}</motion.div>
      <motion.div className='sltd' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>{t('details')}</motion.div>
      <motion.div className='sltbs' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <motion.button className='sltb' whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>{t('buttonone')}</motion.button>
        <motion.button className='sltbtwo' whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, delay: 0.1 }}>{t('buttontwo')}</motion.button>
      </motion.div>
    </motion.div>
  )
}

export default SpaceLandText;
