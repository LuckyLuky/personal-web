'use client';

import { useTranslations } from 'next-intl';

export default function Career() {
  const t = useTranslations('career');

  const timeline = [
    {
      role: t('engineeringManager.role'),
      company: t('pipedrive'),
      period: t('engineeringManager.period'),
      description: t('engineeringManager.description'),
    },
    {
      role: t('leadEngineer.role'),
      company: t('pipedrive'),
      period: t('leadEngineer.period'),
      description: t('leadEngineer.description'),
    },
    {
      role: t('seniorDev.role'),
      company: t('pipedrive'),
      period: t('seniorDev.period'),
      description: t('seniorDev.description'),
    },
    {
      role: t('frontendLecturer.role'),
      company: t('ceskaTv'),
      period: t('frontendLecturer.period'),
      description: t('frontendLecturer.description'),
    },
    {
      role: t('phpJs.role'),
      company: t('rtsoft'),
      period: t('phpJs.period'),
      description: t('phpJs.description'),
    },
  ];

  return (
    <section id="career" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('title')}</h2>
      <div className="space-y-8 max-w-3xl">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-6">
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full mt-1"></div>
              {index < timeline.length - 1 && (
                <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
              <div className="text-sm text-gray-500 mb-1">{item.company}</div>
              <div className="text-sm text-gray-400 mb-3">{item.period}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
