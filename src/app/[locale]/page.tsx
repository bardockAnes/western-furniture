import { useLocale, useTranslations } from 'next-intl';
import LocalSwitcher from '@/components/local-switcher'
import Link from 'next/link';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Index({params: {locale}}:Props){
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  const ActiveLocale = useLocale()

  return (<div>
    <Link href={`${ActiveLocale}/mobilier`}>{t('title')}</Link >
    <LocalSwitcher/>
    </div>
  );
}