'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Interests() {
  const t = useTranslations('interests');

  const interests = [
    {
      title: t('rugby'),
      icon: '🏉',
    },
    {
      title: t('mmaBjj'),
      icon: '🥋',
    },
    {
      title: t('fitness'),
      icon: '💪',
    },
    {
      title: t('coffee'),
      icon: '☕',
    },
    {
      title: t('history'),
      icon: '🏰',
    },
    {
      title: t('geopolitics'),
      icon: '🌍',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('title')}</h2>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="rounded-2xl overflow-hidden mx-auto mb-12 lg:mb-0 w-full lg:w-[25%] lg:flex-shrink-0 lg:order-last">
          <Image
            src="/images/lukas-family-cartoon.jpg"
            alt="Lukas family cartoon"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 lg:flex-1">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{interest.icon}</div>
              <h3 className="font-semibold text-sm">{interest.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
