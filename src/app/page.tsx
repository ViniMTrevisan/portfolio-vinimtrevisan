import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Detecta se o usuário prefere inglês
  const locale = acceptLanguage.includes('en') ? 'en' : 'pt';
  
  redirect(`/${locale}`);
}