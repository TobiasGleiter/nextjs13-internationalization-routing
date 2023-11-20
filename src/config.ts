import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    de: '/pfadnamen',
  },
  '/blogs': {
    en: '/blogs-en',
    de: '/blogs-de',
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
