'use client';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import { motion } from 'framer-motion';
import './styles.css';

export default function Navigation({locale}:any) {
  const t = useTranslations('Navigation');

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const newsh = locale === 'ar' ? 'newsh' : '';

  return (
    <motion.div 
      className="navigation"
      style={{fontFamily:newsh}}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className='logo' variants={itemVariants}>
        <motion.text className='logotext' style={{fontFamily:newsh}}>{t('logo')}</motion.text>
      </motion.div>
      <nav>
        <motion.div className="links" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <NavigationLink href="/">{t('kitchen')}</NavigationLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavigationLink href="/pathnames">{t('furniture')}</NavigationLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavigationLink href="/me">{t('contact')}</NavigationLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavigationLink href="/me">{t('blog')}</NavigationLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavigationLink href="/me">{t('about')}</NavigationLink>
          </motion.div>
        </motion.div>
      </nav>
      <motion.div className='lang' variants={itemVariants}>
        <LocaleSwitcher />
      </motion.div>
    </motion.div>
  );
}
