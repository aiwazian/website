'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Download, Terminal } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function HeroSection() {
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  // Parallax 0.4x speed:
  // As the page scrolls down, standard elements move up at 1.0x speed.
  // Shifting y down by scrollY * 0.6 makes this element rise in the viewport at 0.4x speed.
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 600]);
  const textOpacity = useTransform(scrollY, [0, 700], [1, 0.2]);

  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
      {/* Background radial ambient glow */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/5 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Large Top Parallax AIWAZIAN Wordmark: +40px top margin and +60px bottom margin */}
      <motion.div
        style={{
          y: parallaxY,
          opacity: textOpacity,
        }}
        className="relative z-0 select-none pointer-events-none mt-[104px] sm:mt-[136px] md:mt-[168px] mb-[124px] sm:mb-[156px] md:mb-[188px] w-full flex items-center justify-center overflow-visible px-2"
      >
        <span className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black uppercase tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.12em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600/30 drop-shadow-[0_0_45px_rgba(255,255,255,0.15)] inline-block max-w-full truncate sm:overflow-visible">
          AIWAZIAN
        </span>
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center max-w-4xl"
      >
        {/* Unboxed Metadata Tagline */}
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-mono mb-4 flex-wrap">
          <span>{t.hero.tagline1}</span>
          <span aria-hidden="true">·</span>
          <span>{t.hero.tagline2}</span>
          <span aria-hidden="true">·</span>
          <span>{t.hero.tagline3}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight uppercase text-white mb-6">
          {t.hero.headline1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
            {t.hero.headline2}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-10">
          {t.hero.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://play.google.com/store/apps/details?id=com.aiwazian.messenger"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 active:scale-[0.98] px-9 py-4 rounded-xl font-bold text-base transition-all text-center flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <Download className="w-5 h-5" />
            {t.hero.ctaGooglePlay}
          </a>
          <a
            href="https://github.com/aiwazian/messenger-client"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 active:scale-[0.98] text-zinc-200 px-8 py-4 rounded-xl font-medium text-base transition-all text-center flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-zinc-400" />
            {t.hero.ctaGitHub}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
