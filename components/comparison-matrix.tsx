'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

interface ComparisonRow {
  feature: string;
  description: string;
  aiwazian: boolean | string;
  telegram: boolean | string;
  whatsapp: boolean | string;
  signal: boolean | string;
}

export function ComparisonMatrix() {
  const { t } = useLanguage();

  const rows: ComparisonRow[] = [
    {
      feature: t.comparison.row1Feature,
      description: t.comparison.row1Desc,
      aiwazian: true,
      telegram: false,
      whatsapp: false,
      signal: false,
    },
    {
      feature: t.comparison.row2Feature,
      description: t.comparison.row2Desc,
      aiwazian: true,
      telegram: t.comparison.clientOnly,
      whatsapp: false,
      signal: true,
    },
    {
      feature: t.comparison.row3Feature,
      description: t.comparison.row3Desc,
      aiwazian: true,
      telegram: t.comparison.premiumExists,
      whatsapp: true,
      signal: true,
    },
  ];

  const renderCell = (val: boolean | string, isPrimary: boolean = false) => {
    if (val === true) {
      return (
        <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold text-xs">
          <Check className="w-4 h-4 stroke-[2.5]" />
          <span>{t.comparison.yes}</span>
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="flex items-center justify-center gap-1.5 text-zinc-500 text-xs">
          <X className="w-4 h-4 stroke-[2]" />
          <span>{t.comparison.no}</span>
        </div>
      );
    }
    return (
      <span className={`text-xs text-center block ${isPrimary ? 'text-emerald-300 font-medium' : 'text-zinc-400'}`}>
        {val}
      </span>
    );
  };

  return (
    <motion.section
      id="comparison"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-3xl mb-12 relative z-10">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
          {t.comparison.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mt-3 mb-4 text-white">
          {t.comparison.title}
        </h2>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
          {t.comparison.description}
        </p>
      </div>

      {/* Comparison Table Container with Dark Shadow & Rounded Corners */}
      <div className="overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-3xl shadow-[0_0_120px_60px_rgba(0,0,0,0.95)] relative z-10 p-2 sm:p-4">
        <table className="w-full text-left border-separate border-spacing-0 min-w-[650px]">
          <thead>
            <tr>
              <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400 w-2/5 border-b border-white/10">
                {t.comparison.colFeature}
              </th>
              <th className="py-5 px-4 text-center text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 rounded-t-xl w-1/5 border-b border-white/10">
                {t.comparison.colAiwazian}
              </th>
              <th className="py-5 px-4 text-center text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/7 border-b border-white/10">
                {t.comparison.colTelegram}
              </th>
              <th className="py-5 px-4 text-center text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/7 border-b border-white/10">
                {t.comparison.colWhatsapp}
              </th>
              <th className="py-5 px-4 text-center text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/7 border-b border-white/10">
                {t.comparison.colSignal}
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((row, idx) => {
              const isLast = idx === rows.length - 1;
              const borderBottom = isLast ? '' : 'border-b border-white/5';

              return (
                <tr
                  key={idx}
                  className={`hover:bg-white/5 transition-colors group/row ${isLast ? 'rounded-b-2xl' : ''}`}
                >
                  <td
                    className={`py-5 px-6 ${borderBottom} ${
                      isLast ? 'rounded-bl-2xl' : ''
                    } transition-all`}
                  >
                    <p className="font-semibold text-zinc-200">{row.feature}</p>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">{row.description}</p>
                  </td>
                  <td
                    className={`py-5 px-4 bg-emerald-500/5 ${borderBottom} transition-all`}
                  >
                    {renderCell(row.aiwazian, true)}
                  </td>
                  <td className={`py-5 px-4 ${borderBottom} transition-all`}>
                    {renderCell(row.telegram)}
                  </td>
                  <td className={`py-5 px-4 ${borderBottom} transition-all`}>
                    {renderCell(row.whatsapp)}
                  </td>
                  <td
                    className={`py-5 px-4 ${borderBottom} ${
                      isLast ? 'rounded-br-2xl' : ''
                    } transition-all`}
                  >
                    {renderCell(row.signal)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
