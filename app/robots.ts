import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
	const headersList = await headers();
	const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost:3000';
	const proto = headersList.get('x-forwarded-proto') || (host.startsWith('localhost') ? 'http' : 'https');
	const currentOrigin = `${proto}://${host}`;

	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${currentOrigin}/sitemap.xml`,
	};
}

