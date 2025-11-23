"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
        {t("description")}
      </p>
    </section>
  );
}
