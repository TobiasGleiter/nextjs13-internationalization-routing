import Header from '@/src/components/navigation/Header';
import { Locale, i18n } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/lang';
import type { Metadata, ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { meta } = await getDictionary(params.lang);

  return {
    title: meta.title,
    description: meta.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header lang={lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
