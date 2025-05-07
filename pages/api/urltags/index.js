import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const userId = req.query.userId;

  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid or missing userId in query parameters' });
  }

  const parsedUserId = parseInt(userId);

  switch (req.method) {
    case 'GET':
      return await getTags(req, res, parsedUserId);
    case 'POST':
      return await createTag(req, res, parsedUserId);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

async function getTags(req, res, userId) {
  try {
    const tags = await prisma.urltag.findMany({
      where: {
        user_id: userId,
        is_deleted: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return res.status(200).json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return res.status(500).json({ error: 'Failed to fetch tags' });
  }
}

async function createTag(req, res, userId) {
  const { tag_name } = req.body;

  if (!tag_name) {
    return res.status(400).json({ error: 'Tag name is required' });
  }

  try {
    const existingTag = await prisma.urltag.findFirst({
      where: {
        user_id: userId,
        tag_name,
        is_deleted: false,
      },
    });

    if (existingTag) {
      return res.status(409).json({ error: 'Tag already exists' });
    }

    const newTag = await prisma.urltag.create({
      data: {
        user_id: userId,
        tag_name,
      },
    });

    return res.status(201).json(newTag);
  } catch (error) {
    console.error('Error creating tag:', error);
    return res.status(500).json({ error: 'Failed to create tag' });
  }
}
