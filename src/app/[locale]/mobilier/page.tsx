'use client';

import React from 'react'
import { useTranslations } from 'use-intl'

function mobilier () {
    const t = useTranslations('Index');
  return (
    <div>{t('title')}</div>
  )
}

export default mobilier