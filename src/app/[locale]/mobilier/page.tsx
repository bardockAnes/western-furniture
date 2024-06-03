'use client';

import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'
import { useTranslations } from 'use-intl'

type Props = {
  params: {locale: string};
};

export default function Mobilier({params: {locale}}:Props){
  unstable_setRequestLocale(locale);
    const t = useTranslations('Index');
  return (
    <div>{t('title')}</div>
  )
}

