'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MYimage from '../../public/AllKitchen2.jpeg';
import MYimage2 from '../../public/onlycapent.jpeg';
import MYimage3 from '../../public/optionskitchen2.jpeg';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';

function Services({locale} : any) {
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

    const newsh = locale === 'ar' ? 'newsh' : '';
    const ats = locale === 'ar' ? '50px' : '';
    const ads = locale === 'ar' ? '7px' : '';

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
                        <Image className='simages' src={MYimage3} alt={'anes'} layout='fill' objectFit='cover' />
                    </motion.div>
                    <motion.div className='std'>
                        <motion.p className='stt' style={{ fontFamily: newsh,lineHeight:ats}}>{t('customKitchenOptions.title')}</motion.p>
                        <motion.p className='stde' style={{ fontFamily: newsh}}>{t('customKitchenOptions.details')}</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='sd' variants={itemVariants}>
                    <motion.div className='scimages'  whileHover={{ scale: 1.1 }}>
                        <Image className='simages'  src={MYimage2} alt={'anes'} layout='fill' objectFit='cover' />
                    </motion.div>
                    <motion.div className='std'>
                        <motion.p className='stt' style={{ fontFamily: newsh,lineHeight:ats}}>{t('tailoredCabinetryCraftsmanship.title')}</motion.p>
                        <motion.p className='stde' style={{ fontFamily: newsh}}>{t('tailoredCabinetryCraftsmanship.details')}</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='sd' variants={itemVariants}>
                    <motion.div className='scimages' whileHover={{ scale: 1.1 }}>
                        <Image className='simages' src={MYimage} alt={'anes'} layout='fill' objectFit='cover' />
                    </motion.div>
                    <motion.div className='std'>
                        <motion.p className='stt' style={{ fontFamily: newsh,lineHeight:ats}}>{t('completeKitchenMakeover.title')}</motion.p>
                        <motion.p className='stde' style={{ fontFamily: newsh}}>{t('completeKitchenMakeover.details')}</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Services;
