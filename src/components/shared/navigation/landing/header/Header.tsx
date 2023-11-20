import { useTranslations } from 'next-intl';
import NavigationLink from '../../../link/NavigationLink';
import LocaleSwitcher from '../../../switcher/LocaleSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <div className="flex w-full bg-white border-b border-zinc-800">
      <nav className="container flex items-center justify-between p-2 text-black">
        <div>
          <h1 className="text-xl font-bold">Next.js 13 and Next Intl</h1>
        </div>
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
          <NavigationLink href="/blogs">{t('blogs')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
