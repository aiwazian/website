'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GitHubIcon, TelegramIcon, XIcon } from '@/components/social-icons';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full z-10 mt-auto border-t border-white/10 bg-[#080808]/95 backdrop-blur-xl py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6">
        {/* Line 1: Logo & AIWAZIAN (left) ... 3 Social Icons (middle) ... © 2026 AIWAZIAN (right) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden bg-black border border-white/15 p-0.5 shrink-0 group-hover:border-white/30 transition-colors">
              <Image
                src="/assets/aistudio/logo-playstore_04609e87.png"
                alt="Aiwazian"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-sm tracking-wider uppercase text-white group-hover:text-zinc-200 transition-colors">
              Aiwazian
            </span>
          </Link>

          {/* Social Icons between AIWAZIAN and Copyright */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/karenaiwazian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://aiwazian.t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/aiwazian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright on the far right */}
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono whitespace-nowrap">
            {t.footer.copyright}
          </p>
        </div>

        {/* Line 2: On the left, Privacy Policy, and below it Terms of Service */}
        <div className="flex flex-col items-start gap-2.5 text-xs text-zinc-400">
          <Link
            href="/privacy"
            className="relative py-0.5 hover:text-white transition-colors group inline-flex items-center"
          >
            <span>{t.footer.privacyPolicy}</span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full rounded-full"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/tos"
            className="relative py-0.5 hover:text-white transition-colors group inline-flex items-center"
          >
            <span>{t.footer.termsOfService}</span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full rounded-full"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
