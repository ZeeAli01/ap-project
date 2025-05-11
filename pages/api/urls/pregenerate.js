import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.method === 'POST') {
    try {
        const { userId, count = 5 } = req.body;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        if (count <= 0 || count > 100) {
            return res.status(400).json({ error: 'Count must be between 1 and 100' });
        }

        const preGeneratedUrls = [];

        for (let i = 0; i < count; i++) {
            const shortUrl = nanoid(8);

            const newUrl = await prisma.url.create({
                data: {
                    user_id: userId,
                    short_url: shortUrl,
                    is_pre_generated: true,
                    status: 'inactive',
                },
            });

            preGeneratedUrls.push(newUrl);

            await prisma.auditlog.create({
                data: {
                    url_id: newUrl.url_id,
                    action: 'PRE_GENERATE',
                    changed_by: userId,
                    details: 'Pre-generated URL created',
                },
            });
        }

        return res.status(201).json({ success: true, urls: preGeneratedUrls });
    } catch (error) {
        console.error('Error pre-generating URLs:', error);
        return res.status(500).json({ error: 'Failed to pre-generate URLs' });
    }
}
else if (req.method === 'GET') {
    try {
        const { userId, isPreGenerated } = req.query;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const preGeneratedUrls = await prisma.url.findMany({
            where: {
                user_id: userId,
                is_pre_generated: isPreGenerated === 'true',
            },
        });

        return res.status(200).json({ success: true, urls: preGeneratedUrls });
    } catch (error) {
        console.error('Error fetching pre-generated URLs:', error);
        return res.status(500).json({ error: 'Failed to fetch pre-generated URLs' });
    }
}
else {
    return res.status(405).json({ error: 'Method Not Allowed' });
}
}
