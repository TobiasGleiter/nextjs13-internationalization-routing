import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/lang';
import { Metadata, ResolvingMetadata } from 'next';

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

export default async function Page({ params }: Props) {
  const { page } = await getDictionary(params.lang);

  return (
    <div>
      <h1>{page.about.title}</h1>
      <p>{page.about.description}</p>
    </div>
  );
}
