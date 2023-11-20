import 'server-only';
import { Locale } from '../i18n.config';

const dictionaries = {
  en: () => import('@/src/lang/en.json').then((module) => module.default),
  de: () => import('@/src/lang/de.json').then((module) => module.default),
  ar: () => import('@/src/lang/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
