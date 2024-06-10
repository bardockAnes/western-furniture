'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MYimage from '../../public/3.jpeg';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';

function Services() {
    const t = useTranslations('services');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <section ref={ref} className='servicesSection'>
            <motion.p
                id='services'
                className='st'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={titleVariants}
            >
                {t('services')}
            </motion.p>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className='services'
            >
                <motion.div className='sd' variants={itemVariants}>
                    <motion.div className='scimages' whileHover={{ scale: 1.1 }}>
                        <Image className='simages' src={MYimage} alt={'anes'} layout='fill' objectFit='cover' />
                    </motion.div>
                    <motion.div className='std'>
                        <motion.p className='stt'>{t('customKitchenOptions.title')}</motion.p>
                        <motion.p className='stde'>{t('customKitchenOptions.details')}</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='sd' variants={itemVariants}>
                    <motion.div className='scimages' whileHover={{ scale: 1.1 }}>
                        <Image className='simages' src={MYimage} alt={'anes'} layout='fill' objectFit='cover' />
                    </motion.div>
                    <motion.div className='std'>
                        <motion.p className='stt'>{t('tailoredCabinetryCraftsmanship.title')}</motion.p>
                        <motion.p className='stde'>{t('tailoredCabinetryCraftsmanship.details')}</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='sd' variants={itemVariants}>
                    <motion.div className='scimages' whileHover={{ scale: 1.1 }}>
                        <Image className='simages' src={MYimage} alt={'anes'} layout='fill' objectFit='cover' />
                    </motion.div>
                    <motion.div className='std'>
                        <motion.p className='stt'>{t('completeKitchenMakeover.title')}</motion.p>
                        <motion.p className='stde'>{t('completeKitchenMakeover.details')}</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Services;
