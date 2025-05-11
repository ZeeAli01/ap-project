  //GET /api/urlclicks?urlId=your-uuid-here&page=1&limit=50&startDate=2023-01-01&endDate=2023-12-31

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
  try {
    const { urlId, page = 1, limit = 50, startDate, endDate } = req.query;
    
    if (!urlId) {
      return res.status(400).json({ error: 'URL ID is required' });
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    
    if (isNaN(pageNum) || pageNum < 1) {
      return res.status(400).json({ error: 'Page must be a positive number' });
    }
    
    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      return res.status(400).json({ error: 'Limit must be between 1 and 100' });
    }

    const whereClause = {
      url_id: urlId,
      is_deleted: false,
    };

    if (startDate || endDate) {
      whereClause.access_date = {};
      
      if (startDate) {
        whereClause.access_date.gte = new Date(startDate);
      }
      
      if (endDate) {
        whereClause.access_date.lte = new Date(endDate);
      }
    }

    const totalClicks = await prisma.urlclick.count({
      where: whereClause,
    });

    const skip = (pageNum - 1) * limitNum;
    
    const clicks = await prisma.urlclick.findMany({
      where: whereClause,
      orderBy: {
        access_date: 'desc',
      },
      skip: skip,
      take: limitNum,
      include: {
        url: {
          select: {
            short_url: true,
            original_url: true,
          },
        },
      },
    });

    return res.status(200).json({
      data: clicks,
      pagination: {
        total: totalClicks,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(totalClicks / limitNum),
      },
    });
  } catch (error) {
    console.error('Error fetching URL clicks:', error);
    return res.status(500).json({ error: 'Failed to fetch URL clicks' });
  }
}