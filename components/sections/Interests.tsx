'use client';

import { useTranslations } from 'next-intl';

export default function Interests() {
  const t = useTranslations('interests');

  const interests = [
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
      title: t('fantasyBooks'),
      icon: '📚',
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
    </section>
  );
}
