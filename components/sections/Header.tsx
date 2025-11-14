'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity">
            <div className="w-6 h-6 border-2 border-foreground rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
            </div>
            <span>Lukas Havlicek</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#career" className="text-sm hover:text-primary transition-colors">
              Career
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LuckyLuky/personal-web"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-card rounded-lg transition-colors"
              aria-label="Code"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>
            <button className="p-2 hover:bg-card rounded-lg transition-colors" aria-label="Settings">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
