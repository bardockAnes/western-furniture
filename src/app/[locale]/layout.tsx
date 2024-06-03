import type { Metadata } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';


export const metadata: Metadata = {
  title: "Anes",
  description: "next app by aness",
};

// Can be imported from a shared config
const locales = ['en', 'fr', 'ar'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));

  type Props = {
    params: {locale: string};
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}