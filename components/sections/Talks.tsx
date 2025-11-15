'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Talks() {
  const t = useTranslations('talks');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoId = 'k3zKfpA9CSw';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('title')}</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">
          {t('frontkon.title')}
        </h3>
        <p className="text-sm text-muted-foreground italic">
          {t('frontkon.language')}
        </p>
      </div>

      <div className="w-full rounded-2xl overflow-hidden aspect-video relative">
        {!isVideoLoaded ? (
          <div
            onClick={handleClick}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer transition-all"
            style={{
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for better play button visibility */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}
