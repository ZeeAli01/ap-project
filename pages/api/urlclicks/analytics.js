//GET /api/urlclicks/analytics?urlId=your-uuid-here&groupBy=day&startDate=2025-12-15&endDate=2025-12-30
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(405).json({ error: `Method ${method} Not Allowed` });
  }

  try {
    const { urlId, groupBy = 'day', startDate, endDate } = req.query;
    
    if (!urlId) {
      return res.status(400).json({ error: 'URL ID is required' });
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

    const clicks = await prisma.urlclick.findMany({
      where: whereClause,
      select: {
        access_date: true,
        country: true,
        city: true,
        referrer: true,
      },
      orderBy: {
        access_date: 'asc',
      },
    });

    let analytics = {};
    
    switch (groupBy) {
      case 'day':
        analytics = clicks.reduce((acc, click) => {
          const day = click.access_date.toISOString().split('T')[0];
          acc[day] = (acc[day] || 0) + 1;
          return acc;
        }, {});
        break;
        
      case 'country':
        analytics = clicks.reduce((acc, click) => {
          const country = click.country || 'Unknown';
          acc[country] = (acc[country] || 0) + 1;
          return acc;
        }, {});
        break;
        
      case 'city':
        analytics = clicks.reduce((acc, click) => {
          const city = click.city || 'Unknown';
          acc[city] = (acc[city] || 0) + 1;
          return acc;
        }, {});
        break;
        
      case 'referrer':
        analytics = clicks.reduce((acc, click) => {
          const referrer = click.referrer || 'Direct';
          acc[referrer] = (acc[referrer] || 0) + 1;
          return acc;
        }, {});
        break;
        
      default:
        return res.status(400).json({ error: 'Invalid groupBy parameter' });
    }

    const result = Object.entries(analytics).map(([key, value]) => ({
      [groupBy]: key,
      count: value,
    }));

    return res.status(200).json({
      urlId,
      groupBy,
      totalClicks: clicks.length,
      data: result,
    });
  } catch (error) {
    console.error('Error generating URL click analytics:', error);
    return res.status(500).json({ error: 'Failed to generate analytics' });
  }
}