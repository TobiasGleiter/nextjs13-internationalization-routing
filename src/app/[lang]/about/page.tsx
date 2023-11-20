import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Hallo',
    description: 'Description',
  };
}

export default function Page({ params, searchParams }: Props) {
  return <div>Test</div>;
}
