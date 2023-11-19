import { useTranslations } from 'next-intl';
import NavigationLink from '../../../link/NavigationLink';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
        </div>
      </nav>
    </div>
  );
}
