import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  // Se não houver locale ou não for válido, usa o padrão
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  console.log('🌍 Loading locale:', locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});