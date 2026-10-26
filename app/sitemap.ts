import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const headersList = await headers();
	const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost:3000';
	const proto = headersList.get('x-forwarded-proto') || (host.startsWith('localhost') ? 'http' : 'https');
	const currentOrigin = `${proto}://${host}`;

	return [
		{
			url: currentOrigin,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${currentOrigin}/privacy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${currentOrigin}/tos`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	];
}

