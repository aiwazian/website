import type { Metadata } from 'next';
import { GitHubIcon, TelegramIcon } from '@/components/social-icons';
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
			<body className="bg-[#080808] text-[#F0F0F0] font-sans flex flex-col min-h-screen antialiased selection:bg-zinc-700/50 selection:text-white" suppressHydrationWarning>
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

				<footer className="px-6 md:px-12 py-8 z-10 mt-auto border-t border-white/5 grid grid-cols-1 md:grid-cols-3 items-end gap-6">
					<div className="flex gap-6 text-xs text-zinc-500">
						<Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-4">
							Политика конфиденциальности
						</Link>
						<Link href="/tos" className="hover:text-white transition-colors underline underline-offset-4">
							Условия использования
						</Link>
					</div>

					<div className="flex gap-5 justify-self-start md:justify-self-center">
						<a
							href="https://aiwazian.t.me"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Telegram"
							className="text-zinc-500 hover:text-white transition-colors"
						>
							<TelegramIcon className="w-5 h-5" />
						</a>
						<a
							href="https://github.com/aiwazian"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-zinc-500 hover:text-white transition-colors"
						>
							<GitHubIcon className="w-5 h-5" />
						</a>
					</div>

					<p className="text-[10px] text-zinc-700 uppercase tracking-widest justify-self-start md:justify-self-end">
						&copy; {new Date().getFullYear()} AIWAZIAN
					</p>
				</footer>
			</body>
		</html >
	)
}
