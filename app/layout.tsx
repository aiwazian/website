import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Aiwazian Messenger',
  description: 'Мессенджер с полной анонимностью, без привязки к телефону и почте, с открытым исходным кодом.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#080808] text-[#F0F0F0] font-sans flex flex-col min-h-screen antialiased selection:bg-zinc-700/50 selection:text-white relative overflow-x-hidden" suppressHydrationWarning>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a1a2e] rounded-full filter blur-[150px] opacity-20 -mr-48 -mt-48 pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#16213e] rounded-full filter blur-[120px] opacity-10 -ml-24 -mb-24 pointer-events-none -z-10"></div>

        <header className="sticky top-0 w-full flex justify-between items-center px-6 md:px-12 py-6 z-50 bg-[#080808]/70 backdrop-blur-md border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold tracking-tight uppercase">Aiwazian</span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            <a href="https://rustore.ru/catalog/app/com.aiwazian.messenger" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Скачать</a>
          </nav>
        </header>

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-end z-10 mt-auto gap-6 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-6 text-xs text-zinc-500">
              <Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-4">Политика конфиденциальности</Link>
              <Link href="/tos" className="hover:text-white transition-colors underline underline-offset-4">Условия использования</Link>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] text-zinc-700 uppercase tracking-widest mt-1">&copy; {new Date().getFullYear()} AIWAZIAN</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
