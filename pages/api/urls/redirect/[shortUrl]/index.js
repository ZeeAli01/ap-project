import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { shortUrl } = req.query;

        if (!shortUrl) {
            return res.status(400).json({ error: 'Short URL is required' });
        }

        const url = await prisma.url.findUnique({
            where: {
                short_url: shortUrl,
                is_deleted: false,
                status: 'active',
            },
        });

        if (!url || !url.original_url) {
            return res.status(404).json({ error: 'URL not found or inactive' });
        }

        if (url.expiration_date && new Date(url.expiration_date) < new Date()) {
            return res.status(410).json({ error: 'URL has expired' });
        }

        try {
            const userAgent = req.headers['user-agent'] || '';
            const ipAddress = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                '0.0.0.0';
            const referrer = req.headers.referer || null;

            const country = null;
            const city = null;

            const now = new Date();

            await prisma.urlclick.create({
                data: {
                    url_id: url.url_id,
                    access_date: now,
                    access_time: now,
                    ip_address: ipAddress.toString().substring(0, 45),
                    user_agent: userAgent,
                    referrer: referrer,
                    country: country,
                    city: city,
                },
            });
        } catch (clickError) {
            console.error('Error recording click:', clickError);
        }

        return res.redirect(301, url.original_url);
    } catch (error) {
        console.error('Error redirecting URL:', error);
        return res.status(500).json({ error: 'Failed to redirect' });
    }
}