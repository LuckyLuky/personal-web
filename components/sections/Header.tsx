'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity">
            <div className="w-6 h-6 border-2 border-foreground rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
            </div>
            <span>{t('name')}</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              {t('about')}
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">
              {t('skills')}
            </Link>
            <Link href="#career" className="text-sm hover:text-primary transition-colors">
              {t('career')}
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LuckyLuky/personal-web"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-card rounded-lg transition-colors"
              aria-label={t('codeAriaLabel')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
