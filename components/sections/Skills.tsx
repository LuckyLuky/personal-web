'use client';

import { useTranslations } from 'next-intl';

export default function Skills() {
  const t = useTranslations('skills');
  const technicalStack = [
    {
      name: "TypeScript",
      icon: "<>",
    },
    {
      name: "JavaScript",
      icon: "JS",
    },
    {
      name: "React",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      icon: "🟢",
    },
    {
      name: "React Native",
      icon: "📱",
    },
    {
      name: "Next.js",
      icon: "▲",
    },
  ];

  const productGrowth = [
    t('plg'),
    t('growthHacking'),
    t('abTesting'),
    t('dataDriven'),
  ];

  const domainLeadership = [
    {
      title: t('b2bSaas.title'),
      icon: "🏢",
      description: t('b2bSaas.description'),
    },
    {
      title: t('engineeringManagement.title'),
      icon: "👥",
      description: t('engineeringManagement.description'),
    },
    {
      title: t('scalingFrontend.title'),
      icon: "⚡",
      description: t('scalingFrontend.description'),
    },
    {
      title: t('crossFunctional.title'),
      icon: "🤝",
      description: t('crossFunctional.description'),
    },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        {t('title')}
      </h2>

      {/* Technical Stack */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">{t('technicalStack')}</h3>
        <div className="flex flex-wrap gap-3">
          {technicalStack.map((tech, index) => (
            <span
              key={index}
              className="px-5 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <span className="text-cyan-600 font-bold">{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Product & Growth */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">{t('productGrowth')}</h3>
        <div className="flex flex-wrap gap-3">
          {productGrowth.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Domain & Leadership */}
      <div>
        <h3 className="text-xl font-semibold mb-4">{t('domainLeadership')}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {domainLeadership.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
