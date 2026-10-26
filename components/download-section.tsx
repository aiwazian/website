'use client';

import Image from 'next/image';
import { Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

export function DownloadSection() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="download"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Intense Ambient Glow Halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/15 blur-[180px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-white/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative text-center max-w-4xl mx-auto p-8 sm:p-14 md:p-16 rounded-3xl shadow-[0_0_120px_60px_rgba(0,0,0,0.95)] z-10">
        {/* App Logo Display with Glow */}
        <div className="relative w-24 h-24 mx-auto mb-8 rounded-3xl overflow-hidden bg-black/80 border border-white/10 p-2 shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center">
          <Image
            src="/assets/aistudio/logo-playstore_04609e87.png"
            alt="Aiwazian App Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>{t.download.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
          {t.download.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
            {t.download.title2}
          </span>
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {t.download.description}
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.aiwazian.messenger"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 active:scale-95 px-10 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          >
            <Download className="w-5 h-5" />
            {t.download.ctaButton}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {t.download.badgeAndroid}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {t.download.badgeFree}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {t.download.badgeProtect}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
