import Services from '@/components/Services';
import SpaceLand from '@/components/SpaceLand';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';


type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <>
      <SpaceLand />
      <Services />
    </>
  );
}
