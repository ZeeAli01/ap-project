import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const { userId } = req.query;

                if (!userId) {
                    return res.status(400).json({ error: 'User ID is required' });
                }

                const urls = await prisma.url.findMany({
                    where: {
                        user_id: userId,
                        is_deleted: false,
                    },
                    orderBy: {
                        created_at: 'desc',
                    },
                });

                return res.status(200).json(urls);
            } catch (error) {
                console.error('Error fetching URLs:', error);
                return res.status(500).json({ error: 'Failed to fetch URLs' });
            }

        case 'POST':
            try {
                const { userId, originalUrl, tagId, logoId, urlType, expirationDate } = req.body;

                if (!originalUrl) {
                    return res.status(400).json({ error: 'Original URL is required' });
                }

                const shortUrl = nanoid(8);

                const newUrl = await prisma.url.create({
                    data: {
                        original_url: originalUrl,
                        short_url: shortUrl,
                        user_id: userId || null,
                        tag_id: tagId || null,
                        logo_id: logoId || null,
                        url_type: urlType || null,
                        expiration_date: expirationDate ? new Date(expirationDate) : null,
                    },
                });

                if (userId) {
                    await prisma.auditlog.create({
                        data: {
                            url_id: newUrl.url_id,
                            action: 'CREATE',
                            changed_by: userId,
                            details: 'URL created',
                        },
                    });
                }

                return res.status(201).json(newUrl);
            } catch (error) {
                console.error('Error creating URL:', error);
                return res.status(500).json({ error: 'Failed to create URL' });
            }

        default:
            return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
}