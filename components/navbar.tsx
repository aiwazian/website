'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Download, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.comparison, href: '#comparison' },
    { name: t.navbar.opensource, href: '#opensource' },
    { name: t.navbar.download, href: '#download' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#080808]/50 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3.5">
        {/* Zone 1: Wordmark with official logo (links to home) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all">
            <Image
              src="/assets/aistudio/logo-playstore_04609e87.png"
              alt="Aiwazian Messenger Logo"
              width={36}
              height={36}
              className="object-contain p-1"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase text-white group-hover:text-zinc-200 transition-colors">
            Aiwazian
          </span>
        </Link>

        {/* Zone 2: Navigation Links (only on Home page) */}
        {isHomePage && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 group"
              >
                <span>{link.name}</span>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full rounded-full"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        )}

        {/* Zone 3: Language Switcher, Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Toggle (RU / EN) */}
          <div className="flex items-center rounded-lg bg-zinc-900/90 border border-white/10 p-0.5 text-xs font-mono shadow-inner">
            <button
              type="button"
              onClick={() => setLang('ru')}
              aria-label="Переключить на русский язык"
              className={`px-2 sm:px-2.5 py-1 rounded-md transition-all ${
                lang === 'ru'
                  ? 'bg-white text-black font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-label="Switch to English language"
              className={`px-2 sm:px-2.5 py-1 rounded-md transition-all ${
                lang === 'en'
                  ? 'bg-white text-black font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Google Play Button: hidden on screens < 425px, visible on >= 425px */}
          <a
            href="https://play.google.com/store/apps/details?id=com.aiwazian.messenger"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[425px]:inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-full hover:bg-zinc-200 active:scale-95 transition-all whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Google Play</span>
          </a>

          {/* Mobile Menu Toggle Button (only on Home page) */}
          {isHomePage && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 transition-colors"
              aria-label={mobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu (only for Home page) */}
      <AnimatePresence>
        {isHomePage && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-zinc-800 bg-[#080808]/95 backdrop-blur-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-900/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.aiwazian.messenger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-black bg-white rounded-xl active:bg-zinc-200 transition-colors shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  {t.navbar.installGooglePlay}
                </a>
                <a
                  href="https://github.com/aiwazian/messenger-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl hover:text-white transition-colors"
                >
                  {t.navbar.sourceCodeGitHub}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
