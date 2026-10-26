import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { headers, cookies } from 'next/headers';
import './globals.css';
import Script from 'next/script';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LanguageProvider } from '@/lib/i18n';
import { Language, translations } from '@/lib/dictionary';

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-mono',
});

export async function generateMetadata(): Promise<Metadata> {
	const headersList = await headers();
	const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost:3000';
	const proto = headersList.get('x-forwarded-proto') || (host.startsWith('localhost') ? 'http' : 'https');
	const currentOrigin = `${proto}://${host}`;

	const cookieStore = await cookies();
	const savedLang = cookieStore.get('aiwazian_lang')?.value;
	let isRu = false;

	if (savedLang === 'ru') {
		isRu = true;
	} else if (savedLang === 'en') {
		isRu = false;
	} else {
		const acceptLang = headersList.get('accept-language')?.toLowerCase() || '';
		const primary = acceptLang.split(',')[0]?.trim() || '';
		isRu = primary.startsWith('ru');
	}

	const meta = isRu ? translations.ru.meta : translations.en.meta;

	return {
		metadataBase: new URL(currentOrigin),
		title: meta.homeTitle,
		description: meta.homeDescription,
		applicationName: 'Aiwazian Messenger',
		authors: [{ name: isRu ? 'Карен Айвазян' : 'Karen Aiwazian', url: 'https://github.com/aiwazian' }],
		creator: isRu ? 'Карен Айвазян' : 'Karen Aiwazian',
		publisher: 'Aiwazian',
		keywords: meta.homeKeywords.split(', '),
		openGraph: {
			type: 'website',
			locale: isRu ? 'ru_RU' : 'en_US',
			url: currentOrigin,
			siteName: 'Aiwazian Messenger',
			title: meta.ogTitle,
			description: meta.ogDescription,
			images: [
				{
					url: '/og-image.png',
					width: 512,
					height: 512,
					alt: isRu ? 'Логотип Aiwazian Messenger' : 'Aiwazian Messenger Logo',
				},
			],
		},
		twitter: {
			card: 'summary',
			title: meta.homeTitle,
			description: meta.homeDescription,
			images: ['/og-image.png'],
			creator: '@karenaiwazian',
		},
		icons: {
			icon: '/icon.svg',
			shortcut: '/icon.svg',
			apple: '/logo.png',
		},
	};
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const headersList = await headers();
	const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost:3000';
	const proto = headersList.get('x-forwarded-proto') || (host.startsWith('localhost') ? 'http' : 'https');
	const currentOrigin = `${proto}://${host}`;

	const cookieStore = await cookies();
	const savedLang = cookieStore.get('aiwazian_lang')?.value;
	let initialLang: Language = 'en';

	if (savedLang === 'ru' || savedLang === 'en') {
		initialLang = savedLang;
	} else {
		const acceptLang = headersList.get('accept-language')?.toLowerCase() || '';
		const primary = acceptLang.split(',')[0]?.trim() || '';
		if (primary.startsWith('ru')) {
			initialLang = 'ru';
		} else {
			initialLang = 'en';
		}
	}

	return (
		<html lang={initialLang} className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
			<body className="bg-[#080808] text-[#F0F0F0] font-sans flex flex-col min-h-screen antialiased selection:bg-zinc-700/50 selection:text-white" suppressHydrationWarning>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-Q9WNS0MCJZ"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-Q9WNS0MCJZ');
                    `}
				</Script>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'SoftwareApplication',
							name: 'Aiwazian Messenger',
							operatingSystem: 'Android 11+',
							applicationCategory: 'CommunicationApplication',
							description:
								initialLang === 'ru'
									? translations.ru.meta.homeDescription
									: translations.en.meta.homeDescription,
							image: `${currentOrigin}/og-image.png`,
							offers: {
								'@type': 'Offer',
								price: '0',
								priceCurrency: 'RUB',
							},
							author: {
								'@type': 'Person',
								name: initialLang === 'ru' ? 'Айвазян Карен Шаваршевич' : 'Karen Aiwazian',
								url: 'https://github.com/aiwazian',
							},
							installUrl: 'https://play.google.com/store/apps/details?id=com.aiwazian.messenger',
						}),
					}}
				/>

				<LanguageProvider initialLang={initialLang}>
					<Navbar />

					<main className="flex-1 flex flex-col">
						{children}
					</main>

					<Footer />
				</LanguageProvider>
			</body>
		</html>
	);
}
