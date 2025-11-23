"use client";

import { useTranslations } from "next-intl";

export default function ExpertiseHighlights() {
  const t = useTranslations("expertiseHighlights");

  const highlights = [
    {
      icon: '📈',
      key: 'productLedGrowth',
    },
    {
      icon: '💼',
      key: 'b2bSaasFrontend',
    },
    {
      icon: '🔬',
      key: 'experimentationData',
    },
    {
      icon: '🎯',
      key: 'engineeringLeadership',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">{t("title")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-card p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="text-4xl mb-4">{highlight.icon}</div>
            <h3 className="text-xl font-bold mb-3">{t(`${highlight.key}.title`)}</h3>
            <p className="text-gray-600 leading-relaxed">{t(`${highlight.key}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
