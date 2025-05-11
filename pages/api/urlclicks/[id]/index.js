// GET /api/urlclicks/123
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method !== 'GET') {
    return res.status(405).json({ error: `Method ${method} Not Allowed` });
  }

  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({ error: 'Valid URL click ID is required' });
  }

  try {
    const clickId = parseInt(id, 10);
    
    const urlClick = await prisma.urlclick.findUnique({
      where: {
        click_id: clickId,
        is_deleted: false,
      },
      include: {
        url: {
          select: {
            url_id: true,
            short_url: true,
            original_url: true,
            user_id: true,
          },
        },
      },
    });

    if (!urlClick) {
      return res.status(404).json({ error: 'URL click not found' });
    }

    return res.status(200).json(urlClick);
  } catch (error) {
    console.error('Error fetching URL click:', error);
    return res.status(500).json({ error: 'Failed to fetch URL click' });
  }
}
