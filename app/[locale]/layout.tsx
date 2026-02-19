import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n/request';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lukas-havlicek.cz'),
  title: "Lukas Havlicek - Engineering Manager & Fullstack Developer",
  description: "Portfolio of Lukas Havlicek, a passionate leader and TypeScript specialist who loves hands-on coding. Specializing in building modern, scalable applications.",
  icons: {
    icon: [
      { url: '/images/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icons/favicon.ico' },
    ],
    apple: '/images/icons/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://lukas-havlicek.cz',
    title: "Lukas Havlicek - Engineering Manager & Fullstack Developer",
    description: "Portfolio of Lukas Havlicek, a passionate leader and TypeScript specialist who loves hands-on coding. Specializing in building modern, scalable applications.",
    images: [{ url: '/images/lukas-avatar.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lukas Havlicek - Engineering Manager & Fullstack Developer",
    description: "Portfolio of Lukas Havlicek, a passionate leader and TypeScript specialist who loves hands-on coding. Specializing in building modern, scalable applications.",
    images: ['/images/lukas-avatar.jpg'],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
