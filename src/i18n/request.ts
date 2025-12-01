import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Default locale for static export - client-side will handle switching
  const locale = 'en';

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});
