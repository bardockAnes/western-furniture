import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import './styles.css';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="navigation">
      <div className='logo'>
        <text className='logotext'>west furniter</text>
      </div>
      <nav>
        <div className="links" >
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
          <NavigationLink href="/me">{t('me')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
