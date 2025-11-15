'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h2>
        <p className="text-lg text-gray-600 mb-8">
          {t('description')}
        </p>
        <a
          href="mailto:info@lukas-havlicek.cz"
          className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg transition-colors font-medium"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
