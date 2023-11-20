import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'en'
      ? // When using Turbopack, this will enable HMR for `en`
        import('./lang/en.json')
      : import(`./lang/${locale}.json`))
  ).default,
}));
