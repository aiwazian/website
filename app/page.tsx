'use client';

import { HeroSection } from '@/components/hero-section';
import { ComparisonMatrix } from '@/components/comparison-matrix';
import { TransparencySection } from '@/components/transparency-section';
import { DownloadSection } from '@/components/download-section';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      <HeroSection />
      <ComparisonMatrix />
      <TransparencySection />
      <DownloadSection />
    </div>
  );
}
