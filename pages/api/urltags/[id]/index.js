import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const tagId = parseInt(req.query.id);
  const userId = parseInt(req.query.userId);

  if (isNaN(tagId)) {
    return res.status(400).json({ error: 'Invalid tag ID' });
  }

  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  switch (req.method) {
    case 'GET':
      return await getTag(req, res, userId, tagId);
    case 'PUT':
      return await updateTag(req, res, userId, tagId);
    case 'DELETE':
      return await deleteTag(req, res, userId, tagId);
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

async function getTag(req, res, userId, tagId) {
  try {
    const tag = await prisma.urltag.findFirst({
      where: {
        tag_id: tagId,
        user_id: userId,
        is_deleted: false,
      },
    });

    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    return res.status(200).json(tag);
  } catch (error) {
    console.error('Error fetching tag:', error);
    return res.status(500).json({ error: 'Failed to fetch tag' });
  }
}

async function updateTag(req, res, userId, tagId) {
  const { tag_name } = req.body;

  if (!tag_name) {
    return res.status(400).json({ error: 'Tag name is required' });
  }

  try {
    const existingTag = await prisma.urltag.findFirst({
      where: {
        tag_id: tagId,
        user_id: userId,
        is_deleted: false,
      },
    });

    if (!existingTag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    const duplicateTag = await prisma.urltag.findFirst({
      where: {
        tag_id: { not: tagId },
        user_id: userId,
        tag_name,
        is_deleted: false,
      },
    });

    if (duplicateTag) {
      return res.status(409).json({ error: 'Tag name already exists' });
    }

    const updatedTag = await prisma.urltag.update({
      where: { tag_id: tagId },
      data: {
        tag_name,
        updated_at: new Date(),
      },
    });

    return res.status(200).json(updatedTag);
  } catch (error) {
    console.error('Error updating tag:', error);
    return res.status(500).json({ error: 'Failed to update tag' });
  }
}

async function deleteTag(req, res, userId, tagId) {
  try {
    const existingTag = await prisma.urltag.findFirst({
      where: {
        tag_id: tagId,
        user_id: userId,
        is_deleted: false,
      },
    });

    if (!existingTag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    const urlsUsingTag = await prisma.url.count({
      where: {
        tag_id: tagId,
        is_deleted: false,
      },
    });

    if (urlsUsingTag > 0) {
      return res.status(409).json({ 
        error: 'Cannot delete tag that is in use',
        urlCount: urlsUsingTag
      });
    }

    const deletedTag = await prisma.urltag.update({
      where: { tag_id: tagId },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({ message: 'Tag deleted successfully', tag: deletedTag });
  } catch (error) {
    console.error('Error deleting tag:', error);
    return res.status(500).json({ error: 'Failed to delete tag' });
  }
}
