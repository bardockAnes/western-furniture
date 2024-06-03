import { useLocale, useTranslations } from 'next-intl';
import LocalSwitcher from '@/components/local-switcher'
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('Index');
  const ActiveLocale = useLocale()

  return (<div>
    <Link href={`${ActiveLocale}/mobilier`}>{t('title')}</Link >
    <LocalSwitcher/>
    </div>
  );
}