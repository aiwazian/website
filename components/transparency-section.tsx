'use client';

import { useState } from 'react';
import { Terminal, Copy, Check, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { GitHubIcon } from '@/components/social-icons';
import { useLanguage } from '@/lib/i18n';

export function TransparencySection() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const cloneCommand = `${t.opensource.cloneCommentClient}
git clone https://github.com/aiwazian/messenger-client.git

${t.opensource.cloneCommentServer}
git clone https://github.com/aiwazian/messenger-server.git`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="opensource"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl shadow-[0_0_120px_60px_rgba(0,0,0,0.95)] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>{t.opensource.badge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              {t.opensource.title}
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              {t.opensource.description}
            </p>

            {/* Client and Server GitHub Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/aiwazian/messenger-client"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>{t.opensource.clientBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://github.com/aiwazian/messenger-server"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl font-medium text-sm transition-all active:scale-95"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>{t.opensource.serverBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-black/50 border border-white/5 rounded-2xl p-5 font-mono text-xs shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-sm overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3 text-zinc-500 text-[11px]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                {t.opensource.bashHeader}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                aria-label={copied ? t.opensource.copied : t.opensource.copy}
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? t.opensource.copied : t.opensource.copy}</span>
              </button>
            </div>
            <pre className="text-emerald-400 leading-relaxed overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden whitespace-pre-wrap break-all sm:break-normal font-mono text-xs">
              {cloneCommand}
            </pre>
            <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] text-zinc-500">
              {t.opensource.footerNote}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
