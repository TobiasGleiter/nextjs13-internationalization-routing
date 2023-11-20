import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/lang';
import Link from 'next/link';
import LocaleSwitcher from '../locale/locale-switcher';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`} locale={lang}>
              {navigation.home}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/about`} locale={lang}>
              {navigation.about}
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
