'use client';

import { AppPathnames } from '@/src/config';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link } from '../../../navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-4 py-2 transition-colors rounded-lg',
        isActive
          ? 'text-black bg-blue-500 '
          : 'text-zinc-700 hover:text-black duration-150'
      )}
      href={href}
      {...rest}
    />
  );
}
